'use client';

import { useState, useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import styles from './page.module.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '');

interface Place {
  id: number;
  place_name: string;
  visit_date: string | null;
}

const Homepage = () => {
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const { data, error } = await supabase
          .from('places')
          .select('id, place_name, visit_date')
          .order('visit_date', { ascending: true });

        if (error) throw error;
        if (data) setSavedPlaces(data);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const handleDateChange = async (id: number, newDate: string) => {
    try {
      const { error } = await supabase
        .from('places')
        .update({ visit_date: newDate })
        .eq('id', id);

      if (error) throw error;

      setSavedPlaces(places =>
        places.map(place =>
          place.id === id ? { ...place, visit_date: newDate } : place
        )
      );
    } catch (error) {
      console.error('Error updating date:', error);
    }
  };

  const handleSelect = async (description: string) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const { data, error } = await supabase
        .from('places')
        .insert([
          { 
            place_name: description,
            visit_date: null
          },
        ])
        .select();

      if (error) throw error;
      if (data) {
        setSavedPlaces(prev => [...prev, data[0]]);
      }
    } catch (error) {
      console.error('Error saving place:', error);
    }
  };

  const groupedPlaces = savedPlaces.reduce((groups: Record<string, Place[]>, place) => {
    const date = place.visit_date || 'Unscheduled';
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(place);
    return groups;
  }, {});

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Places Search</h1>
      
      <div className={styles.searchContainer}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search for a place"
          className={styles.searchInput}
        />
        
        {status === "OK" && (
          <ul className={styles.suggestionsList}>
            {data.map(suggestion => {
              const {
                place_id,
                description,
              } = suggestion;

              return (
                <li
                  key={place_id}
                  onClick={() => handleSelect(description)}
                  className={styles.suggestionItem}
                >
                  {description}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className={styles.savedPlaces}>
        <h2>Saved Places</h2>
        {isLoading ? (
          <p>Loading saved places...</p>
        ) : (
          Object.entries(groupedPlaces).map(([date, places]) => (
            <div key={date} className={styles.dateGroup}>
              <h3>
                {date === 'Unscheduled' 
                  ? 'Unscheduled' 
                  : new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                }
              </h3>
              <ul>
                {places.map((place) => (
                  <li key={place.id} className={styles.placeItem}>
                    <span>{place.place_name}</span>
                    <input
                      type="date"
                      value={place.visit_date || ''}
                      onChange={(e) => handleDateChange(place.id, e.target.value)}
                      className={styles.dateInput}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
import React, { useEffect, useState } from 'react';
import API from '../../api/API';
import NavigationBar from '../utils/NavigationBar';
import LoadSpinner from '../utils/Loader';
import Rep from './Rep';

export default function RepsList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [reps, setReps] = useState({});
  const [pagesCount, setPagesCount] = useState({});
  useEffect(() => {
    loadRepositoriesPage(1)
  }, []);
  async function loadRepositoriesPage(page) {
    await API.get(`/reps?page=${page}`)
      .then((response) => {
        setPagesCount(parseInt(response.headers['x-total-pages']));
        const repsList = response.data.map((rep, index) => <Rep rep={rep} key={index} />);
        setReps(repsList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main>
      {isLoading ? <LoadSpinner /> : (
        <>
          <NavigationBar loadRepositoriesPage={loadRepositoriesPage} pagesCount={pagesCount} />
          <div className="repsList card-deck mb-3 text-center">
            {reps}
          </div>
        </>
      )}
    </main>
  );
}

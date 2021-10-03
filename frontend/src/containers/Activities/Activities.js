import React, { useState, useEffect } from "react";
import Tips from "../../components/Tips/Tips";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let flag = false;
    const fetchThree = async () => {
      for (let i = 0; i <= 2; i++) {
        try {
          const response = await fetch(
            "https://www.boredapi.com/api/activity",
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const data = await response.json();
          const { key, activity, type, participants } = data;
          if (!flag) {
            setActivities((state) => {
              return [...state, { key, activity, type, participants }];
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchThree();
    return () => {
      flag = true;
    };
  }, []);

  const addActivity = () => {
    fetch("https://www.boredapi.com/api/activity", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          throw new Error(data);
        }
        const { key, activity, type, participants } = data;
        setActivities((state) => {
          return [...state, { key, activity, type, participants }];
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__title main__title--orange">Tips</h1>
        <h5 className="main__subtitle">
          Here are some tricks to help expose the real culprit behind a feeling
          of boredom and get back to your usual self:
        </h5>
      </header>
      <Tips />
      <header className="main__header">
        <h1 className="main__title main__title--orange">Activity list</h1>
        <h5 className="main__subtitle">
          The activity list is where our suggestions for escaping boredom will
          be. In addition, there are fields like the number of participants that
          help you take your entertainment to a different level of enjoyment!
        </h5>
      </header>
      <section className="main__section">
        <table className="activities">
          <thead className="activities__head">
            <tr>
              <th className="activities__header">Activity</th>
              <th className="activities__header">Type</th>
              <th className="activities__header">Participants</th>
            </tr>
          </thead>
          <tbody className="activities__body">
            {activities.map(({ key, activity, type, participants }) => {
              return (
                <tr key={key} className="activities__row">
                  <td className="activities__datacell">{activity}</td>
                  <td className="activities__datacell">{type}</td>
                  <td className="activities__datacell">{participants}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <div className="main__actions">
        <button
          className="main__action btn"
          type="button"
          onClick={addActivity}
        >
          GET NEXT ACTIVITY
        </button>
      </div>
    </main>
  );
};

export default Activities;

import React, { useState, useEffect } from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";
const Table = () => {
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
          {activities.map((activity) => {
            return <TableRow key={activity.key} {...activity} />;
          })}
        </tbody>
      </table>
      <div className="main__actions">
        <button
          className="main__action btn"
          type="button"
          onClick={addActivity}
        >
          GET NEXT ACTIVITY
        </button>
      </div>
    </section>
  );
};

export default Table;

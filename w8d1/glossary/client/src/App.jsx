import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import EntryForm from "./components/EntryForm";
import Header from "./components/Header";
import SubjectList from "./components/SubjectList";

import { entriesStarter } from "./data/entriesData";
import axios from "axios";

function App() {
  const [entries, setEntries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/entries")
      .then((res) => setEntries(res.data))
      .catch((err) => {
        console.log(err);
        setEntries(null);
      });
  }, []);

  const organizeEntriesPerSubject = (entries) => {
    // const {subject:[...], subject2:[...]}
    // Prepare the structure (output)
    const entriesPerSubject = {};
    for (const entry of entries) {
      entriesPerSubject[entry.subject] = [];
    }
    // Populate the structure
    for (const entry of entries) {
      entriesPerSubject[entry.subject].push(entry);
    }

    return entriesPerSubject;
  };

  const addEntry = (formData) => {
    if (!isLoading) {
      const { subject, content } = formData;

      const newEntry = { subject, content };
      setIsLoading(true);
      axios
        .post("/api/entries", { entry: newEntry })
        .then((res) => {
          newEntry.id = res.data;
          setEntries([...entries, newEntry]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const entriesPerSubject = Array.isArray(entries) && organizeEntriesPerSubject(entries);
  return (
    <div className="App">
      <Header />
      <main>
        <EntryForm onSubmit={addEntry} isLoading={isLoading} />
        {entriesPerSubject && <SubjectList entries={entriesPerSubject} />}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import { Paper, TextField } from "@material-ui/core";

function SearchBar({ getQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuery(searchTerm);
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </Paper>
  );
}

export default SearchBar;

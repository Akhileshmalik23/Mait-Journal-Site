import React, { useState } from 'react';
import { TextField, Button, Typography, Container, MenuItem } from '@mui/material';

const JournalSubmissionPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    institution: '',
    category: '',
    googleDocsLink: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      title: '',
      institution: '',
      category: '',
      googleDocsLink: '',
    });
  };

  return (
    

    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat' }}>
        Submit Your Journal
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
          Title of Journal
        </Typography>
        <TextField
          fullWidth
          label="Title"
          name="title"
          variant="outlined"
          required
          value={formData.title}
          onChange={handleFormChange}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
          Author Name
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="fullName"
          variant="outlined"
          type="text"
          required
          value={formData.fullName}
          onChange={handleFormChange}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
          Institution
        </Typography>
        <TextField
          select
          fullWidth
          label="Select Institution"
          name="institution"
          variant="outlined"
          value={formData.institution}
          onChange={handleFormChange}
          required
          sx={{ mb: 2 }}
        >
          <MenuItem value="Institution 1">Institution 1</MenuItem>
          <MenuItem value="Institution 2">Institution 2</MenuItem>
          <MenuItem value="Institution 3">Institution 3</MenuItem>
        </TextField>

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
          Category
        </Typography>
        <TextField
          select
          fullWidth
          label="Select Category"
          name="category"
          variant="outlined"
          value={formData.category}
          onChange={handleFormChange}
          required
          sx={{ mb: 2 }}
        >
          <MenuItem value="Category 1">Category 1</MenuItem>
          <MenuItem value="Category 2">Category 2</MenuItem>
          <MenuItem value="Category 3">Category 3</MenuItem>
        </TextField>

        <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
          Google Docs Link
        </Typography>
        <TextField
          fullWidth
          label="Google Docs Link"
          name="googleDocsLink"
          variant="outlined"
          type="url"
          required
          value={formData.googleDocsLink}
          onChange={handleFormChange}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
    
    



  );
};

export default JournalSubmissionPage;

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, MenuItem, FormControlLabel, Checkbox } from '@mui/material';

const Sidebar = () => {
    const [isChecked, setIsChecked] = useState(false);




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

    const handleCheckboxChange = (event) => {
        setIsChecked(true);
        if (isChecked == true) {
            setIsChecked(false);
        }
    };


    return (
        <div className='h-full mb-0'>

            <Container sx={{ marginTop: '5px' }}>
                <Typography variant="h5" align="center" gutterBottom sx={{ fontFamily: 'Montserrat' }}>
                    SEE JOURNALS...
                </Typography>

                <div className='flex flex-col'>
                    <FormControlLabel
                        label="Paid"
                        control={
                            <Checkbox
                                value=""
                                checked={isChecked}
                                onChange={handleCheckboxChange} // Call the function when checkbox changes
                                color="primary"
                            />
                        }
                    />

                    <FormControlLabel
                        label="Free"
                        control={
                            <Checkbox
                                value=""
                                checked={isChecked}
                                onChange={handleCheckboxChange} // Call the function when checkbox changes
                                color="primary"
                            />
                        }
                    />

                    <FormControlLabel
                        label="Top Authors"
                        control={
                            <Checkbox
                                value=""
                                checked={isChecked}
                                onChange={handleCheckboxChange} // Call the function when checkbox changes
                                color="primary"
                            />
                        }
                    />

                </div>

                <div className='w-full m-1 h-5 bg-color color-[#00f]'></div>


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

                    {/* <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
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
                    /> */}

                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Container>

        </div>
    )
}

export default Sidebar
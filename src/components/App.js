import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const App = () => (
  <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
)

export default App
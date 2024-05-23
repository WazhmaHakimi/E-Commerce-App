import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import './Styles/AdmissionStyle.css'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

export default function Admission() {
  return (
    <FormContainer
      defaultValues={{ Name: '' }}
      onSuccess={data => console.log(data)}>
      <Box
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="AdmissionContainer"
      >
        <Paper
          elevation={3}
          sx={{
            background: "rgba(255,255,255,0.5)",
            width: "70%",
            height: "100%",
            padding: 8,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              "& .MuiTextField-root": { m: 2, width: "96%" },
            }}
          >
            <Grid container spacing={2}>

              <Grid xs={12}>
                <h2>Registeration Form</h2>
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Child's Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Full Name'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <DatePicker label="Date of Birth" required/>
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  margin={'dense'}
                  label={'Age at the time of Enrolment'}
                  name={'number-text'}
                  required
                  type={'number'} 
                  />
              </Grid>

              <Grid xs={12} md={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Parent / Guardian Personal Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Father\'s Full Name'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Mother\'s Full Name'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Father\'s Qualification'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Mother\'s Qualification'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Father\'s Occupation'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Mother\'s Occupation'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextFieldElement
                  margin={'dense'}
                  label={'Monthly Income'}
                  name={'number-text'}
                  required
                  type={'number'} />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Other source of income'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  margin={'dense'}
                  label={'Amount'}
                  name={'number-text'}
                  required
                  type={'number'} 
                  />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Father\'s Phone Number'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Mother\'s Phone Number'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Emergency Phone Number'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  margin={'dense'}
                  label={'Total number of family members'}
                  name={'number-text'}
                  required
                  type={'number'} 
                  />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  margin={'dense'}
                  label={'Child among siblings'}
                  name={'number-text'}
                  required
                  type={'number'} 
                  />
              </Grid>

              <Grid xs={12} md={12}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Family System'}
                  name={'default-text'}
                />
              </Grid>

              <Grid xs={12} md={12}>
              <TextFieldElement
                  required
                  autoComplete={'new-name'}
                  margin={'dense'}
                  label={'Address'}
                  name={'default-text'}
                />
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Registeration Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <DateTimePicker label="Registeration Date" required />
              </Grid>

              <Grid xs={12} md={6}>
              <TextFieldElement
                  margin={'dense'}
                  label={'Registeration Fee'}
                  name={'number-text'}
                  required
                  type={'number'} 
                  />
              </Grid>

              <Grid xs={12} md={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I agree that the above information is correct."
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid xs={12} md={12}>
              <Button type="submit" variant="contained" endIcon={<SaveIcon />} size="large">
                Save Data
              </Button>
            </Grid>

          </Box>
        </Paper>
      </Box>
    </FormContainer>
  )
}

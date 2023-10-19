import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {Box, Button, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField, Typography} from '@mui/material';
import { deleteOperation, operations } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Doughnut} from 'react-chartjs-2'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Cash.module.css'
import { useState } from 'react';
import React from 'react'

ChartJS.register(ArcElement,Tooltip,Legend);

const  CashInput = () => {

  interface RootState {
    cash: number;
    income: {
      describe: string;
      value: number;
      operation: string;
      type:string;
      method:string;
    }[];
    incomeTotal:number,
    egressTotal:number
  }


  const dispatch = useDispatch()
  const cash = useSelector((state:RootState)=> state.cash)
  const incomes = useSelector((state:RootState) => state.income)
  const incomeTotal = useSelector((state:RootState) => state.incomeTotal)
  const egressTotal = useSelector((state:RootState) => state.egressTotal)
  const [open, setOpen] = useState<'income' | 'egress' | false>(false);
  const handleOpen = (type: 'income' | 'egress') => {
    setOpen(type);
  };
  
  const handleClose = (type: 'income' | 'egress' | false) => {
    setOpen(type);
  };
  


  console.log(incomes)
  
  interface FormValues {
    description:string,
    value:string,
    type:string,
    method:string
  }
  
  const [values,setValues] =  useState<FormValues>({
    description:'',
    value:'',
    type:'',
    method:''
  })

  const [options,setOptions] = useState<string>('')


  const onHandleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const property:string = event.target.name
    type valueInput = string | number
    const value:valueInput = event.target.value
    setValues({
      ...values,
      [property]:value
    })   
  }



  const onHandleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(operations(values.description,Number(values.value),options,values.type,values.method))
    setValues({
      description:'',
      value:'',
      type:'',
      method:''
    })
  }

  const onHandleIncome = (event:SelectChangeEvent) => {
    setOptions(event.target.value)
  }

  const handleDelete = (describe:string,value:number,operation:string) =>{
    dispatch(deleteOperation(describe,value,operation))
  }

  const optionsChart = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white', // Cambiar el color del texto del legend
        },
      },
      tooltip: {
        bodyColor: 'white', // Cambiar el color del texto de tooltip
      },
    },
  };

  const ingresos = incomes.filter(inc => inc.operation === 'suma')
  const egresos = incomes.filter(inc => inc.operation === 'resta')

  const data = {
    labels: ingresos.map(income => income.describe),
    datasets: [{
      label:'Dinero',
      data: ingresos.map(income => income.value) ,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#99B080',
        '#FFF8C9',
        '#BEADFA',
        '#CDFAD5',
        '#FFD9B7',
        '#F1F0E8',
        '#9E9FA5',
        '#A86464',
      ],
      hoverOffset: 4,
    }]
  };

  const dataEgress = {
    labels: egresos.map(income => income.describe),
    datasets: [{
      label:'Dinero',
      data: egresos.map(income => income.value) ,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        '#99B080',
        '#FFF8C9',
        '#BEADFA',
        '#CDFAD5',
        '#FFD9B7',
        '#F1F0E8',
        '#9E9FA5',
        '#A86464',
      ],
      hoverOffset: 4,
    }]
  };

  
  return (
    <Box sx={{margin:-1,padding:-1,mt:-3,overflow:'hidden'}}>
        <Box className={styles.ContainerIncomes} sx={{display:'flex',height:'50vh',p:2,justifyContent:'center',width:'100vw'}}>
            <Box>
              <Box>
                  <h1 className={styles.text}>Disponible: {cash} $</h1>
                  <Box sx={{ display: 'flex' }} className={styles.Incomes}>
                      <h2 className={styles.textChart}>Total Ingresos: {incomeTotal} $</h2>
                      <IconButton onClick={() => handleOpen('income')}>
                        <ArrowCircleRightOutlinedIcon />
                      </IconButton>
                      <Modal
                        open={open === 'income'}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={{ height: '99vh', display: 'flex', position: 'relative',backgroundColor:'#00000085' }}>
                          <Doughnut data={data} options={optionsChart}/>
                          <IconButton
                            onClick={() => handleClose(false)}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 30,
                              color: 'white',
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </Modal>
                    </Box>
                    <Box sx={{ display: 'flex' }} className={styles.Egress}>
                      <h2 className={styles.textChart}>Total Egresos: {egressTotal} $</h2>
                      <IconButton onClick={() => handleOpen('egress')}>
                        <ArrowCircleRightOutlinedIcon />
                      </IconButton>
                      <Modal
                        open={open === 'egress'}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={{ height: '99vh', display: 'flex', position: 'relative',backgroundColor:'#00000085' }}>
                          <Doughnut data={dataEgress} options={optionsChart} />
                          <IconButton
                            onClick={() => handleClose(false)}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 30,
                              color: 'white',
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </Modal>
                    </Box>
                  </Box>
                </Box>
        </Box>
        <form onSubmit={onHandleSubmit} className={styles.form}>
          <FormControl sx={{width:'10rem'}}>
            <InputLabel id="demo-simple-select-label">Operacion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Operation"
                value={options}
                onChange={onHandleIncome}
              >
                <MenuItem value='suma'> + </MenuItem>
                <MenuItem value='resta'> - </MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="Description"   
            name='description'
            value={values.description}
            onChange={onHandleChange}
          />
          <TextField
            id="outlined-required"
            label="Tipo de gasto"   
            name='type'
            value={values.type}
            onChange={onHandleChange}
          />
          <TextField
            id="outlined-required"
            label="Metodo de pago"   
            name='method'
            value={values.method}
            onChange={onHandleChange}
          />
          <TextField
          id="outlined-number"
          label="Number"
          type="number"
          name='value'
          value={values.value}
          onChange={onHandleChange}
          />
          <IconButton color="primary" aria-label="add to shopping cart" type='submit'>
            <CheckRoundedIcon/>
          </IconButton>
        </form>
        <Box sx={{display:'flex',overflow:'hidden'}} justifyContent={'center'} gap={30}>
          <Box sx={{justifyContent:'center',alignItems:'center'}}>
            <TableContainer component={Paper} sx={{width:'100vw',backgroundColor:'#615e5e',p:1,borderTopLeftRadius:'2rem',borderTopRightRadius:'2rem'}}>
              <Table sx={{ minWidth: 650,alignContent:'center' }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{color:'white'}}>Ingreso/Egreso</TableCell>
                    <TableCell align="center" sx={{color:'white'}}>Tipo de gasto</TableCell>
                    <TableCell align="center" sx={{color:'white'}}>Metodo de pago</TableCell>
                    <TableCell align="center" sx={{color:'white'}}>Descripción</TableCell>
                    <TableCell align="center" sx={{color:'white'}}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {incomes.map((income) => (
                    <TableRow
                      key={income.describe}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" sx={{color:'white'}}>
                        {income.value}$
                      </TableCell>
                      <TableCell align="center" sx={{color:'white'}}>{income.type}</TableCell>
                      <TableCell align="center" sx={{color:'white'}}>{income.method}</TableCell>
                      <TableCell align="center" sx={{color:'white'}}>{income.describe}</TableCell>
                      <TableCell align="center" sx={{color:'white'}}>
                        <IconButton onClick={() => handleDelete(income.describe,income.value,income.operation)}>
                          <DeleteForeverIcon/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
    </Box>
  )
}

export default CashInput

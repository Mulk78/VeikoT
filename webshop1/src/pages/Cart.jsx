import Button from '@mui/material/Button';
import { t } from 'i18next';
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <br />
      <Button variant="outlined" as={Link} to="/" > {t("home-page")} </Button>

    </div>
  )
}

export default Cart

//useState + võtta localStorage'st ostukorv
//const [cart,setCart]

//tühjenda funktsioon
//const emptyCart = ()

//kustuta 1 ostukorvist funktsioon
//const deleteFromCart = ()

//ostukorvi kogusumma
//const calculateCartSum = ()

//dünaamika && 
//cart.length === 0
//Näita mõnda pilti
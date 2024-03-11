import Link from 'next/link';
import { AppBar,Container, Toolbar, Typography, Button ,useTheme } from "@mui/material";


function NavBar() {

  return (
    <div>
        <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        My Next.Js App
                    </Typography>
                    <Button color="inherit">
                        <Link href="/" passHref style={{color: 'white'}}>
                            Home
                        </Link>  
                    </Button>
                    <Button color="inherit">
                        <Link href="/dashboard" passHref style={{color: 'white'}}>
                            Dashboard
                        </Link>  
                    </Button>
                </Toolbar>
        </AppBar>
    </div>
  );
}

export default NavBar;

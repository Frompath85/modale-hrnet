
# ModaleHRNet
ModaleHRnet est un composant modale React simple et personnalisable que vous pouvez facilement intégré dans vos applications web (dédié pour le site HRnet).

## Installation

Pour installer la modale, utilisez npm ou yarn :

```bash
  npm i modale-hrnet-frompath
  # ou
  yarn i modale-hrnet-frompath
```

## Usage/Examples
Importez la modale du package installé et le useState, et lui passez  les parametres nécessaires :

1- textModal : le texte de notification
2- linkModal : le texte du lien  
3- linkTo : le nom de la page

on cliquons sur le bouton (x), setOpenModal s'execute en changeons la  valeur de openModal ( true : modale ouverte, false: fermée)


```javascript
import {ModaleHRnet} from 'modale-hrnet-frompath'
import { useState } from 'react'

function App() {
    const [openModal, setOpenModal] = useState(false)
  return 
  {openModal && <ModaleHRnet closeMoldal={setOpenModal}
                 textModal="Employee Created !"  
                 linkModal= "View Current Employees "  
                 linkTo="EmployeeList"/> }
}
```


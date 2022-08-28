function handleClick(clickedId)
  {
     if(clickedId == "customerId")
       document.getElementById('valor').value = "customer";
     else
       document.getElementById('valor').value = "company";
  }
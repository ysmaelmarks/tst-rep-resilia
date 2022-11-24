function ValidarEmail (email) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailPattern.test(email); 
  }
  console.log('teste');
  console.log(ValidarEmail('teste@teste@teste.com'));
  console.log(ValidarEmail('teste@teste.com'));
  console.log(ValidarEmail('teste@.teste.com.br'));

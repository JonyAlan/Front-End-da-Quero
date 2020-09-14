<template>
  <div class="container">
    <div class="col">
      <div class="itens-rows">
        <h1 class="text-black">Pré matriculas</h1>
        <h5>Em breve...</h5>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: "PreMatriculas",
  data() {
    return {
      teste: "", 
    };
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
/* Hide the browser's default checkbox */
input[type="checkbox" i] {
   opacity: 0; 
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 10px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: solid #18ACC4 1px;
  border-radius: 3px;
  cursor: pointer;
}

/* When the checkbox is checked, add a blue background */
input:checked ~ .checkmark {
  background-color: #007a8d;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute; 
  display: none;
}

/* Show the checkmark when checked */
input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkmark:after {
  left: 5px;
  width: 3px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
 
.inputRange {
  flex: 1;
}

h1 {
  list-style-type: none;
  padding: 0;
  text-align: start;
  margin: 0.5em 0;
}
h4 {
  margin:  0;
}
h5 {
  font-weight: normal;
  font-size: .75rem;
}
span {
  line-height: 0rem;
}
.text-blue > span{
  font-size: .8rem;
}

.just-between {
  justify-content: space-between;
  align-items: center;
}
.divider {
  border-top: 3px solid #eeefef;
  margin-right: 10px;
  width: 100%;
  height: 80px;
  cursor: pointer;
}
.dividerCard {
  border-top: 3px solid #eeefef;
  margin: 10px;
  width: 100%; 
  height: 3px;
}
.underline{
  text-decoration: line-through;
} 
.text-inline{
  display: inline-block;
} 

.rowCard{
 margin: 10px -10px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: .8rem;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  min-width: 220px;
  max-width: 225px;
  height: 350px;
  margin: 10px;
  margin-bottom: 40px;
  text-align: center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
 
form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.full-row {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.half-row {
  display: flex;
  width: 48%;
  flex-direction: column;
  margin-bottom: 20px;
}

.spacing {
  margin-right: 2.5%;
}

label {
  font-weight: bold;
  font-size: 0.9rem;
}
.half-row > label {
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.checkbox {
  margin-top: 10px;
}
.checkbox > label {
  margin: 0 10px;
  font-weight: normal;
}

.checkImage {
  position: relative;
  width: 180px;
  display: flex; 
}
.cursoImgLogo {  
  width: 100%;
  max-height: 60px; 
  object-fit: contain;
  align-self: flex-start;
}
.divImgLogo {   
  height: 60px;  
}

.chkCursos {
  align-self: center; 
  height: 20px;
  margin-right: 20px;
}
.valor {
  font-weight: normal;
}
.checkLugar {
  font-weight: normal;
  position: relative;
  top: 7px
}

select {
  border: 1px solid #cec5c5;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9rem;
  text-overflow: ellipsis
} 

.selectOrdenacao {
  border: none;
  padding: 0px;
  color: #007a8d;
  font-weight: bold;
}

.button {
  min-width: 90px;
  -webkit-border-radius: 5px;
  background-color: transparent;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: black;
  padding: 3%;
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 15px 0;
}
.cancelar {
  color: #007a8d;
  border: solid #007a8d 1px;
  margin-right: 3%;
}
.add {
  color: #82898b;
  background-color: #cacdce;
  border: solid #b7bbbc 1px;
}
.enableButton {
  color: #1F2D30;
  background-color: #FDCB13;
  border: solid #DE9E1F 1px;
}

.button:hover {
  opacity: 0.8;
}
</style>

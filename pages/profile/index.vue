<template>
 <div class="container">
 <div> 
      <a class="btn btn-secondary m-3 rounded" href="reprofile">編集する</a>
  </div> 
  <div class="flip">
  <div class="card"> 
    <div class="face front"> 
      <div class="details">
        <div>
        名前
        </div>
        <hr>
        
        <div class="role">
          フロントエンドエンジニア
        </div>
        
        <div class="contact">
          時給: 1000円
        </div>
      
        <div class="contact">
          交通費: 1000円
        </div>
         
      </div>
        <div class="avatar">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgRBhARDw4SDw8QEBAQDg4TCg8PEg8OFREWFhURExUYHCggGBolGxMWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALgAuAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQQDAgUH/8QAKxABAAEDAQYFBAMAAAAAAAAAAAECAwQRITFBUWGBEiNxkbEFEyLxMpLR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAQQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAQAAAAAAAANWHIzuFH9v8AAbpmIjbOndynJs6/yh8mqqqZ1mdZQH2qLlE7pie70+G60ZN6I2VT8g+uMmLlzVVpVv4TzawAAAAAAAQAQBRAFEAURxyrvhszznZAM2bkaz4Y3Rv6yyAAAAABEt+LlzM+Grfwnn0lgAfbHLHueKzE8ePq6AogCiAKIoPIAAAAADD9Qq8yI5R8/pufOz48/tAM4AAAAAAAPo4E+R3locMSnSxHXa7gAAAAKgCCAKIAogCsf1CI/GeO2NOjWwZsT971iAZwAAAAAHq3RrXEc5eXTHiZvU+oPqRGwQBRAFEAUQBBAFEAUQBWTPpnWJ4bu7UldMTTpIPlj3do8NyYeAAAAAHbEifvx3cX0bNmmmNm+d4OogCiAKIAogAIAogCiAKIAxZlPm684cG3Lp1t+nwxAAAAA9W41riOsPp6sGJTrd15NwKIAogCiAKgAggCiAKIAo53L1EcdvKGa5kVzu2QDtkX4iNI3/DGAAAAAO+NdiJ0ndPFsfMdbd+uOscgbhyt3qJ6TydAUQBRAFEUEEAV5rrpiNrzduRTT8QxVVTM6yDvXkzwjRyqu3J4vAAAAAAAAAAAA9Rcr5z7vIDpF+5z17O1vJid+zrwZQH0VYrN6Ynp8NkSCiAII8X6tLc+wM12vWvX29HgAAAAAAAAAAAAAAAAAGjFr4ezO9W6tK4kG4QAccmfwj1AGYAAAAAAAAAAAAAAAAAAAG6J2AA//9k="/>
        </div>
    </div>
    <div class="face back"> 
      <div class="social">
        <table>
          <tr>
            <td>
              <img src="http://photos4.pix.ie/07/F2/07F2D3853C5B404296EDB33BEE70504F-0000318004-0003215507-00032L-4391DB88D99D4095A097A0F870AD8273.png" class="socialico"/>
              <div class="sociallink">Dublin, Ireland</div></td>
            <td>
              <img src="http://www.theiet.org/staticfiles/2011/images/icon-youtube.png" class="socialico"/>
              <div class="sociallink"><a href="https://www.youtube.com">Youtube</a></div>
            </td></tr>
          <tr>
            <td>
              <img src="http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/facebook.png" class="socialico"/>
              <div class="sociallink"><a href="https://www.facebook.com">Facebook</a></div>
            </td>
            <td>
              <img src="http://cdn1.iconfinder.com/data/icons/flat-social-icons-by-lokas-software/48/linkedin.png" class="socialico"/>
              <div class="sociallink"><a href="https://www.linkedin.com">Linkedin</a></div>
            </td></tr>
          <tr>
            <td>
              <img src="http://www.foxnews.com/on-air/special-report-bret-baier/sites/foxnews.com.on-air.special-report-bret-baier/files/twitter-icon.png" class="socialico"/>
              <div class="sociallink"><a href="https://www.twitter.com">Twitter</a></div>
            </td>   
            <td>
              <img src="http://icons.iconarchive.com/icons/studiomx/web/256/Earth-icon.png" class="socialico" />
              <div class="sociallink"><a href="https://www.google.com">Website</a></div>
            </td></tr>
        </table>
      </div> 
    </div>
  </div>
  </div>
 </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
.container{
    max-width :640px;
}
.flip {
  -webkit-perspective: 800;
   width: 600px;
   height: 300px;
    position: relative;
    margin: 5% auto;
}
.flip .card.flipped {
  -webkit-transform: rotatex(-180deg);
}
.flip .card {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 1.5s;
}
.flip .card .face {
  border-radius:20px;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
    font-family: Verdana;
    font-size: 18px;
    text-align: center;
}
.flip .card .front {
  position: absolute;
    background: #373837;
    color: white;
}
.flip .card .back {
  -webkit-transform: rotatex(-180deg);
    background: #373837;
    color: white;
}

.details{
  width:50%;
 margin: 70px 0px 0px 40px;
 float:left;
  text-align:left;
}

.role{
 padding-bottom:5px; 
}

.contact{
 padding-top:10px;
 padding-bottom:10px;
}

.avatar{
 float:right;
 margin-top: 60px;
 margin-right:40px;
}

.avatar img {
  border-radius :15px; 
}

.social {
  margin-top:40px;
  margin-left:5%;
  width: 90%;
}

.social table{
  width:100%; 
  height:220px;
  border-collapse:collapse;
}

.social table td{
  width:50%;
  opacity:0.5;
}

.social table td:hover{
  opacity:1;
}

.socialico{
  height:32px;
  width:32px;
  float:left;
  margin-left:30px;
  margin-right:0px;
  margin-top:10px;
}

.sociallink{
 float:left; 
 margin:20px;
}

.sociallink a{
 text-decoration:none;
 color:white;
}
</style>


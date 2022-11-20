<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>ChiasseZone | Epic 9.7</title>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="Css/style.css">
   </head>
   <body>
      <?php

      include "Includes/navbar.php";

      ?>
      <div class="row main-box">
         <div class="col">
            
         </div>
         <div class="col">
            <div class="box-sub box-sub-cover">
               <h3 style="padding-top: 20vh;" class="fcolorwhite text-center fw-light text-decoration-underline">Page d'inscription</h3>
               <!-- Login Form -->
               <div class="container">
               <form method="POST">
                 <div class="mb-3">
                   <label for="username" class="form-label fcolorwhite">Nom d'utilisateur</label>
                   <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">
                 </div>
                 <div class="mb-3">
                   <label for="password" class="form-label fcolorwhite">Mot de passe</label>
                   <input type="password" class="form-control" id="password" name="password">
                 </div>

                 <div class="mb-3">
                   <label for="passwordconfirm" class="form-label fcolorwhite">Mot de passe ( Confirmation )</label>
                   <input type="password" class="form-control" id="passwordconfirm" name="passwordconfirm">
                 </div>

                 <button style="float: right;" type="submit" class="btn btn-danger" name="login" id="login">Inscription</button><br><br>
                 <div id="emailHelp" class="form-text fcolorwhite"><p class="fw-light">En vous inscrivant vous acceptez nos <a class="nav-link" href="">Conditions générale d'utilisation</a></p></div>
               </form>
            </div>
               <!-- Login Form -->
               <br>
            </div>
         </div>
         <div class="col">
         </div>
      </div>
      <?php include "Includes/footer.php"; ?>   
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
   </body>
</html>
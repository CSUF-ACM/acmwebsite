<html lang="en">
<head>
<meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="img/acm-desktopcta.png">
<link rel="icon" type="image/png" href="img/acm-desktopcta.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
<meta name="viewport" content="width=device-width" />

<link href="css/bootstrap.css" rel="stylesheet" />
<link href='css/rotating-card.css' rel='stylesheet' />
<link href='css/fullcalendar.css' rel='stylesheet' />
<link href='css/fullcalendar.print.css' rel='stylesheet' media='print' />

<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css" />
<style>
.fa:hover {
    color: #e17000;
}
</style>
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>

</head>
<title>CSUF ACM About</title>
<header class="nav-down" id="navbar">
  <div class="container">
  <a class="navbar-brand" href="index.html" ><img src="img/acm-desktopcta.png" onmouseover="this.src='img/acm-desktopctahover.png';" onmouseout="this.src='img/acm-desktopcta.png';" height=50px width=50px></a>
  <div class="navbar-header" style="padding-top:20px;">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" style="background-color:#00274c; border-color:#005daa;">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar" style="background-color:#005daa"></span>
    <span class="icon-bar" style="background-color:#005daa"></span>
    <span class="icon-bar" style="background-color:#005daa"></span>
  </button>
</div>
  <div class="navbar-collapse collapse navbar-right" style="background-color:#00274c; padding-top:20px;">
    <ul class="nav navbar-nav">
      <li><a href="about.html">About Us</a></li>
      <li><a href="board.html">The Board</a></li>
      <li><a href="events.html">Events</a></li>
      <li class="active"><a href="contact.php">Contact Us</a></li>
    </ul>
  </div><!--/.nav-collapse -->
</div>
</header>


<div id="header" style="border-bottom: dashed 1px black"><div class="jumbotron text-center"><h1 style="font-family:Open Sans">Contact Us</h1></div></div>



<section id="contact" style="">
            <div class="container">
                <div class="row">
                    <div class="about_our_company" style="margin-bottom: 20px;">
                        <h1 style="color:#fff;">Get In Touch With ACM</h1>
                        <p style="color:#fff;">Please send us any questions, comments or concerns.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <form role="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Your Name *" name="name" value="<?php echo $name;?>" required>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email *" name="email" value="<?php echo $email;?>" required>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                      <input type="text" class="form-control" placeholder="Your Subject *" name="subject" value="<?php echo $subject;?>" required>
                                      <p class="help-block text-danger"></p>
                                  </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Your Message *" name="message" value="<?php echo $message;?>" required></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <input type="submit" name="but" value="Submit" class="btn btn-xl get"/>
                                </div>
                            </div>
                        </form>
<?php
	if (isset($_POST['but'])) {
	require 'PHPMailer/PHPMailerAutoload.php';
	$mail = new PHPMailer;

	$mail->IsSMTP();
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'acmcsufullerton@gmail.com';                 // SMTP username
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->setFrom('acmcsufullerton@gmail.com', 'Website Form Submission');
	$mail->addAddress('acmcsufullerton@gmail.com', 'Website Form Submission');     // Add a recipient

	$mail->Subject = $_POST['subject'];
	$mail->Body    = "Message from " .$_POST['name']. "\nReply to this email: ". $_POST['email'] . "\n\n" .$_POST['message'];

	if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo '<div class="about_our_company" style="margin-bottom: 20px; text-align: left;"><h1 style="color:#fff;">Message has been sent</h1></div>';
}

}
?>
                    </div>
                    <div class="col-md-4">
                        <p style="color:#fff;">
                            <strong><i class="fa fa-envelope" style="color:white"></i>  Email Address</strong><br>
                            <a href="mailto:acmcsufullerton@gmail.com" style="color:white; text-decoration:none;">acmcsufullerton@gmail.com</a></p>
                        <p></p>
                    </div>

                </div>
            </div>
        </section>
</div>

<div id="footerwrap">
  <div class="container">
<div class="row">
  <div class="col-lg-4">
        <h4>ACM <span class="fa fa-star fa-fw fa-pulse"></span> CSUF</h4>
        <p>
        Association of Computing Machinery<BR>
        California State University, Fullerton
      </p>
    </div>
    <div class="col-lg-4">
          <h4>Find us on Social Media!</h4>
          <p>
            <a href=#><span class="fa fa-twitter-square fa-2x"></span></a>
            <a href=#><span class="fa fa-facebook-square fa-2x"></span></a>
            <a href=#><span class="fa fa-instagram fa-2x"></span></a>
          </p>
      </div>
      <div class="col-lg-4">
            <h4>Meetings</h4>
            <p>
              ICPC Practice @ CS___<BR>
                <i class="fa fa-hand-o-right fa-fw fa-inverse" style="font-size:1em; color:#fff"></i>Every other Friday
            </p>
        </div>
</div>
</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/jquery-1.10.2.js" type="text/javascript"></script>
<script src="js/bootstrap.js"></script>
<script src='js/lib/moment.min.js'></script>
<script src='js/fullcalendar.js'></script>
<script src='js/gcal.min.js'></script>
<script type="text/javascript">
var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = $('header').outerHeight();

$(document).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(document).height() > $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

if($(document).height() ==0){
  $('header').removeClass('nav-up').addClass('nav-down');
}
</script>
<style>

.bgimg{
  /* Full height */
    height: 100%;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  background-image: url("https://farm5.staticflickr.com/4059/4696338852_bde479b169_o.jpg");
  min-height: 100%;
}

@media only screen and (max-device-width: 1024px) {
    .bgimg {
        background-attachment: scroll;
    }
}

</style>
<script type="text/javascript">
//

    $().ready(function(){
        $('[rel="tooltip"]').tooltip();

    });

    function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }
</script>
<script>
$(document).ready(function() {
    $('#calendar').fullCalendar({

      header: {
left: 'prev,next today',
center: 'title',
right: 'month,listYear'
},

      displayEventTime: false, // don't show the time column in list view

        googleCalendarApiKey: 'AIzaSyCwhfMkXl4-iaXUXfP8cBc1LEG3DESnky0',
        eventSources: [
            {
                googleCalendarId: 'jo7mgmudv8uibuffbqtdk1isgc@group.calendar.google.com'
              },
              {
                  googleCalendarId: 'hs6bk4b2nb2dvshs787timb7fo@group.calendar.google.com',
                  className: 'nice-event'
                }
        ],
        eventClick: function(event) {
  // opens events in a popup window
  window.open(event.url, 'gcalevent', 'width=700,height=600');
  return false;
  },
    });
});

</script>
<!--
<script>

  $(document).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(document).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });

    $(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
});
</script>
-->
<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        document.location.hash = hash;
      });
    } // End if
  });

  $(document).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(document).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
</script>
</html>
<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <!--When bookmarked on Apple Devices will use ACM image-->
    <link rel="apple-touch-icon" sizes="76x76" href="img/acm-desktopcta.png">
    <!--icon for page-->
    <link rel="icon" type="image/png" href="img/acm-desktopcta.png">
    <!--Adds compatibility with edge and chrome-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!--changes scale when used on phone-->
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js"></script>
</head>

<!-- This is the off-canvas sidebar -->
<div id="offcanvas-navbar" uk-offcanvas="mode: reveal; flip: true;">
    <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">
            <li><a href="about">About Us</a></li>
            <li><a href="board">The Board</a></li>
            <!-- This is the container enabling the JavaScript -->
            <li class="uk-parent">
                <!-- This is the menu item toggling the dropdown -->
                <a href="events">Events</a>
                <!-- This is the dropdown -->
                <ul class="uk-nav-sub">
                    <li><a href="events">Schedule</a></li>
                    <li><a href="seminars">Seminars</a></li>
                </ul>
            </li>
            <li class="uk-active"><a href="contact">Contact Us</a></li>
            <li><a href="subscribe">Get Involved</a></li>
        </ul>
    </div>
</div>

<!-- Header -->

<div class="uk-inline uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-background-blend-multiply uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle" style="background-image: url('img/IMG_0770.JPG'); height: 30%; background-position: bottom;">
    <div class="uk-width-1-2@m uk-text-center" style="top:0;">
        <div class="uk-position-cover uk-overlay uk-flex-center" style="margin:0 auto; padding: 0 auto; top:0; position:absolute;">
            <BR>
            <h1 class="uk-heading-line">Contact Us</h1>
            <p uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;">Let's keep in touch.</p>
        </div>
    </div>
</div>

<!--Navigation Links-->

<nav class="uk-navbar-container uk-navbar-primary" uk-navbar style="position: relative; z-index: 980;" uk-sticky="show-on-up: true; animation: uk-animation-slide-top; top:0">
    <div class="uk-navbar-left">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="">
            <img class="" src="http://acm.ecs.fullerton.edu/img/acm-desktopcta.png" alt="" height="75" width="75">
            <a href="/"><img class="uk-transition-fade uk-position-cover" src="http://acm.ecs.fullerton.edu/img/acm-desktopctahover.png" height="75" width="75" alt=""></a>
        </div>
    </div>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav uk-visible@s">
            <li><a href="about" class="uk-button uk-button-text">About Us</a></li>
            <li><a href="board" class="uk-button uk-button-text">The Board</a></li>
            <!-- This is the container enabling the JavaScript -->
            <li>
                <!-- This is the menu item toggling the dropdown -->
                <a href="events" class="uk-button uk-button-text">Events</a>
                <!-- This is the dropdown -->
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="events">Schedule</a></li>
                        <li><a href="seminars">Seminars</a></li>
                    </ul>
                </div>
            </li>
            <li class="uk-active"><a href="contact" class="uk-button uk-button-text">Contact Us</a></li>
            <li><a href="subscribe" class="uk-button uk-button-text">Get Involved</a></li>
        </ul>
        <div class="uk-navbar-right uk-hidden@s">
            <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-navbar"></a>
        </div>
    </div>
</nav>

<!--Section stuff-->

<div class="uk-section uk-section-default">
    <div class="uk-container">
        <?php
	if (isset($_POST['but'])) {
        require 'PHPMailer/PHPMailerAutoload.php';
        include 'password.php';
        $mail = new PHPMailer;

        $mail->IsSMTP();
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'acmcsufullerton@gmail.com';        // SMTP username
        /* passwd is from password.php, which is ignored by the git repository. you'll need to create a php file with a variable
        * named "passwd" to make this work */
        $mail->Password = $passwd;
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->setFrom('acmcsufullerton@gmail.com', 'Website Form Submission');
        $mail->addAddress('acmcsufullerton@gmail.com', 'Website Form Submission');     // Add a recipient

        $mail->Subject = $_POST['subject'];
        $mail->Body    = "Message from " .$_POST['name']. "\nReply to this email: ". $_POST['email'] . "\n\n" .$_POST['message'];
        if(!$mail->send()) {
        echo '<div class="uk-alert-danger" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Message could not be sent.</p>
</div>';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {//says message is sent
            echo '<div class="uk-alert-success" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Message Sent! Thank you!</p>
</div>';
        }

    }
?>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER[" PHP_SELF "]);?>">
                <fieldset class="uk-fieldset">
                    <h1>Get in Touch With ACM</h1>

                    <legend class="uk-legend">Please send us any questions, comments or concerns.</legend>

                    <div class="uk-margin">
                        <input class="uk-input" id="name" name="name" alt="name" type="text" placeholder="Your Name*" required>
                    </div>

                    <div class="uk-margin">
                        <input class="uk-input" id="email" name="email" alt="email" type="text" placeholder="Your Email*" required>
                    </div>

                    <div class="uk-margin">
                        <input class="uk-input" id="subject" name="subject" alt="subject" type="text" placeholder="Your Subject*" required>
                    </div>

                    <div class="uk-margin">
                        <textarea class="uk-textarea" id="message" name="message" alt="message" rows="5" placeholder="Your Message*" required></textarea>
                    </div>

                    <div class="uk-margin uk-text-center" uk-margin>

                        <button class="uk-button uk-button-default" id="but" name="but">Submit</button>
                    </div>

                </fieldset>
            </form>

    </div>
</div>

<!--Footer-->

<div class="uk-section uk-section-primary uk-light">
    <div class="uk-container">

        <div class="uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid>
            <div>
                <h3>ACM <span class="fa fa-star fa-fw fa-pulse"></span> CSUF</h3>
                <p>
                    Association of Computing Machinery<br> California State University, Fullerton
                </p>
            </div>
            <div>
                <h3>Find us on Social Media</h3>
                <p>
                    <a href="https://www.twitter.com/acmcsuf" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="icon: twitter"></a>
                    <a href="https://www.facebook.com/groups/acmcsuf" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="icon: facebook"></a>
                    <a href="https://www.instagram.com/acmcsuf" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="icon: instagram"></a>
                </p>
            </div>

            <div>
                <h3>Meetings</h3>
                <p>
                    ICPC Practice @ CS101 starting 9/22/17<br>
                    <span class="uk-margin-small-right" uk-icon="icon: git-fork"></span>Bi-weekly Fridays 4-6pm
                </p>
                <p>
                    Project Jams @ CS300 starting 9/29/17<br>
                    <span class="uk-margin-small-right" uk-icon="icon: git-branch"></span>Bi-weekly Fridays 4-8pm
                </p>
            </div>
        </div>
    </div>
</div>
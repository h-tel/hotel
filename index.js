<script>
    // Toggle du menu burger
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        var burger = document.querySelector('.burger');
        menu.classList.toggle('open');
        burger.classList.toggle('open');
    }
    
    // Changement de style de la navigation lors du défilement
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('fixed')
        } 
        else {
            navbar.classList.remove('fixed')
        }
          });
    </script>
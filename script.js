
   function randomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function colorChanger (elementId) {
        document.getElementById(elementId).style.backgroundColor = randomColor();
        
    }

    function popUp() {
      window.open(href="visittkort.html",
                    'targetWindow',
                    `toolbar=no,
                     location=no,
                     status=no,
                     menubar=no,
                     scrollbars=yes,
                     resizable=yes,
                     width=315px,
                     height=165px
                     top=400px
                     left=300px` 
                     );
    }
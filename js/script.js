function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mousehandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }


    const container = document.getElementById('card');
    const svg = container.querySelector('svg');
    const texto = document.getElementById('text');
    
    container.addEventListener('click', () => {
      svg.style.display = 'none';
      texto.classList.remove('text-false');
      texto.classList.add('text-true');
    });
    
    container.addEventListener('mouseleave', () => {
      svg.style.display = 'block';
      texto.classList.remove('text-true');
      texto.classList.add('text-false');
    });

function openLink(url) {
    window.location.href = url;
  }
  
  

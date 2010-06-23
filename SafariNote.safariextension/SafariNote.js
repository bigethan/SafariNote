function toggleSimpleFrame(msgEvent)
{
    if (msgEvent.name == "BigethanSafariNote" && window == window.top) {
        var wrapEl, wrap, data, hr, dataTitle, dataUrl, dataText, iframe, textSelection, textHolder;
        wrapEl = document.getElementById('bsn_wrap');
        if (!wrapEl) {
            //use dom methods, as using innerHTML causes selection to be lost
            wrap = document.createElement('div');
            wrap.id = 'bsn_wrap';
            data = document.createElement('div');
            data.id = 'bsn_data';
            dataTitle = document.createElement('p');
            dataTitle.id = 'bsn_dataTitle';
            dataUrl = document.createElement('p');
            dataUrl.id = 'bsn_dataUrl';
            dataText = document.createElement('p');
            dataText.id = 'bsn_dataText';
            closeText = document.createElement('p');
            closeText.id = 'bsn_closeText';
            closeText.innerText = 'Click Outside Box To Close';
            iframe = document.createElement('iframe');
            iframe.id = 'bsn_frame';
            iframe.src = 'https://simple-note.appspot.com/index.html';
            
            //stick em all together
            data.appendChild(dataTitle);
            data.appendChild(dataUrl);
            data.appendChild(dataText);
            
            wrap.appendChild(closeText);
            wrap.appendChild(data);
            wrap.appendChild(iframe);
            
                        
            wrap.onclick = function() {
                if (this.style.display == 'block') {
                    this.style.display = 'none';
                }
            };
            wrapEl = wrap;
            document.body.appendChild(wrapEl);
        }
        //toggle it's visibility
        if(!wrapEl.style.display || wrapEl.style.display == 'none') {
            // add the note information to the data block
            //url, page title, highlighted text
            document.getElementById('bsn_dataUrl').innerHTML = window.location;
            document.getElementById('bsn_dataTitle').innerHTML = document.title;
            textSelection = '';
            if (document.getSelection) {
                textSelection = String(document.getSelection());
            }
            textHolder = document.getElementById('bsn_dataText');
            if (textSelection) {
                textHolder.style.display = 'block';
                textHolder.innerHTML = textSelection;
            } else {
                textHolder.style.display = 'none';
            }
            wrapEl.style.display = 'block';
        } else {
            wrapEl.style.display = 'none';

        }
    }
}
safari.self.addEventListener("message", toggleSimpleFrame, false);

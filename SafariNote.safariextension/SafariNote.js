function toggleSimpleFrame(msgEvent)
{
    var wrapEl, wrap, data, hr, dataTitle, dataUrl, dataText, iframe;
    if (msgEvent.name == "BigethanSafariNote") {
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
            iframe = document.createElement('iframe');
            iframe.id = 'bsn_frame';
            iframe.src = 'https://simple-note.appspot.com/index.html';
            hr = document.createElement('hr');
            
            //stick em all together
            data.appendChild(dataTitle);
            data.appendChild(hr);
            data.appendChild(dataUrl);
            data.appendChild(hr);
            data.appendChild(dataText);
            
            wrap.appendChild(data);
            wrap.appendChild(iframe);
            
            document.body.appendChild(wrap);
            wrapEl = wrap;
        }
        
        //toggle it's visibility
        if(!wrapEl.style.display || wrapEl.style.display == 'none') {
            // add the note information to the data block
            //url, page title, highlighted text
            document.getElementById('bsn_dataUrl').innerHTML = window.location;
            document.getElementById('bsn_dataTitle').innerHTML = document.title;
            var textSelection = '';
            if (document.getSelection) {
                textSelection = document.getSelection();
            }
            if (document.getSelection()) {
                document.getElementById('bsn_dataText').innerHTML = String(textSelection);
            }
            wrapEl.style.display = "block";
        } else {
            wrapEl.style.display = "none";    
        }
    }
}
safari.self.addEventListener("message", toggleSimpleFrame, false);
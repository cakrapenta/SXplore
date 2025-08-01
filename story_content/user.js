function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6D4M8RfYOCE":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.2;

}


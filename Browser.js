//Browser Module
function Browser() {console.log(`Help: Usage: Browser.example(); Functions: Browser.init(): Initalises the Browser module. Browser.openPage(content, id) Opens a new page with content. Browser.editPage(content, id) Edit a specified page.`)}
Browser.init = function(){
var Window = null
};
Browser.openPage = function(contentDeetaForWindow, id) {
  Window = window.open('about:blank');
  Window.document.write(contentDeetaForWindow, id);
  Window.document.close();
  return Window;
};
Browser.editPage = function(newContentDeetaForWindow, id) {
  if (Window) {
    Window.document.body.innerHTML = newContentDeetaForWindow;
  }
};
var Browser = {
    init: function() {
        // Store the opened window reference on the Browser object itself
        this.Window = null;
    },
   
    openPage: function(content) {
        // Opens a new blank window and writes the initial content

        this.Window = window.open('about:blank');
        this.Window.document.write(content);
        this.Window.document.close();
        return this.Window;
    },
   
    editPage: function(newContent) {
        // Edits the currently active window
        if (this.Window && !this.Window.closed) {
            this.Window.document.body.innerHTML = newContent;

        } else {
            console.warn("No page is currently open. Call Browser.openPage() first.");
        }
    },
   
    example: function() {
        console.log("Help: Usage: Browser.example(); Functions: Browser.init(): Initializes the Browser module. Browser.openPage(content) Opens a new page with content. Browser.editPage(content) Edits the currently open page.");
    }
};
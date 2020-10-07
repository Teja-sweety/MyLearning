creating a notes application

1.adding basic html and css to create a overview of project
    using UI gradients forbackground is better than using a single color
    download symbols for required buttons (font-awsome cdnjs)

2.toggling text area when edit btn is clicked
        adding a (hidden) class text area and main one
        to hide // css display none is used
3.adding notes (only once) initially
    content typed in textarea should be reflected on 'main' div
    to achive this we used a library 'marked'
    content typed in textarea is taken (e.target//value)and
    'main' div content is replaced with it.
4.we use localstorage to store notes text
    new command used in this is  document.querySelectorAll()
    we store texts in LS in an array (easy to retrive)
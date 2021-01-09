let myData = [
    {id: '127', name: 'myName', job: 'why', private: 'not editable', html: '<a href="https://svelte.dev.one">a html-link</a>'},
    {id: '128', name: 'myRealName', job: 'hmm', private: 'SVG -->', html: '<svg id="svelte" xmlns="http://www.w3.org/2000/svg" width="78" height="21" viewBox="0 0 519 139"><path id="logotype" fill="#4a4a55" d="M172.39,100.41a24.1,24.1,0,0,1-13.72-3.87,19.86,19.86,0,0,1-8-10.61L159,82.86a15.4,15.4,0,0,0,5.45,6.6,14.37,14.37,0,0,0,8.27,2.43,12.14,12.14,0,0,0,7.88-2.38,8.29,8.29,0,0,0,2.94-6.82,7.43,7.43,0,0,0-.81-3.45,10.32,10.32,0,0,0-1.83-2.6,12.36,12.36,0,0,0-3.16-2.09c-1.42-.71-2.59-1.25-3.53-1.62s-2.32-.87-4.13-1.49c-2.28-.8-4-1.42-5.12-1.88a37.86,37.86,0,0,1-4.47-2.25,16.37,16.37,0,0,1-4.18-3.16A15.43,15.43,0,0,1,153.81,60a14.77,14.77,0,0,1,4-16.79q5.12-4.51,13.89-4.51,7.34,0,12.06,3.23a15.63,15.63,0,0,1,6.35,8.61l-8.18,2.73a9.57,9.57,0,0,0-4-4.39A13.3,13.3,0,0,0,171,47.24a10.7,10.7,0,0,0-6.69,1.87,6.28,6.28,0,0,0-2.42,5.29,5.52,5.52,0,0,0,1.87,4.09,13,13,0,0,0,3.92,2.64c1.36.57,3.44,1.33,6.22,2.3,1.7.63,3,1.09,3.79,1.41s2,.83,3.62,1.57a25.79,25.79,0,0,1,3.67,2,34.36,34.36,0,0,1,3,2.43,12.86,12.86,0,0,1,2.6,3.11,17.06,17.06,0,0,1,1.53,3.84,17.42,17.42,0,0,1,.64,4.81q0,8.36-5.71,13.08T172.39,100.41Zm54.62-1L206.56,39.74h9.54l13.55,41.58a66.19,66.19,0,0,1,1.88,6.82,63.43,63.43,0,0,1,1.87-6.82l13.38-41.58h9.46L235.87,99.39Zm47.29,0V39.74h37v8.35H283.17V64.45h18.15V72.8H283.17V91h30v8.35Zm61.44,0V39.74h8.87V90.87h29.14v8.52Zm71.41-51.13V99.39h-8.86V48.26H381.42V39.74H424v8.52Zm35.2,51.13V39.74h37v8.35H451.21V64.45h18.15V72.8H451.21V91h30v8.35Z"/>\n' +
            '<path id="back" fill="#ff3e00" d="M110.23,28.39C99.83,13.51,79.29,9.1,64.44,18.56L38.36,35.18a29.9,29.9,0,0,0-13.52,20,31.53,31.53,0,0,0,3.1,20.24,29.94,29.94,0,0,0-4.47,11.18,31.86,31.86,0,0,0,5.45,24.12c10.4,14.88,30.94,19.29,45.79,9.83L100.79,104a30,30,0,0,0,13.52-20,31.52,31.52,0,0,0-3.11-20.23,30.13,30.13,0,0,0,4.48-11.18,31.9,31.9,0,0,0-5.45-24.12"/>\n' +
            '<path id="front" fill="#fff" d="M61.89,112.16a20.73,20.73,0,0,1-22.24-8.25,19.14,19.14,0,0,1-3.27-14.5A17,17,0,0,1,37,87l.49-1.5,1.34,1A33.78,33.78,0,0,0,49,91.56l1,.29-.09,1A5.9,5.9,0,0,0,51,96.7a6.25,6.25,0,0,0,6.7,2.48,5.85,5.85,0,0,0,1.6-.7L85.34,81.86a5.42,5.42,0,0,0,2.45-3.64,5.77,5.77,0,0,0-1-4.37,6.25,6.25,0,0,0-6.7-2.48,5.72,5.72,0,0,0-1.6.7l-10,6.35a19.1,19.1,0,0,1-5.29,2.32A20.72,20.72,0,0,1,41,72.5,19.16,19.16,0,0,1,37.75,58a18,18,0,0,1,8.13-12.06L72,29.32A19.05,19.05,0,0,1,77.26,27a20.71,20.71,0,0,1,22.23,8.25,19.14,19.14,0,0,1,3.28,14.5,20.15,20.15,0,0,1-.62,2.43l-.5,1.5-1.33-1a33.78,33.78,0,0,0-10.2-5.1l-1-.29.09-1a5.86,5.86,0,0,0-1.06-3.88A6.23,6.23,0,0,0,81.49,40a5.72,5.72,0,0,0-1.6.7L53.8,57.29a5.45,5.45,0,0,0-2.45,3.63,5.84,5.84,0,0,0,1,4.38A6.25,6.25,0,0,0,59,67.78a6,6,0,0,0,1.6-.7l10-6.34a18.61,18.61,0,0,1,5.3-2.33,20.7,20.7,0,0,1,22.23,8.24,19.16,19.16,0,0,1,3.28,14.5,18,18,0,0,1-8.13,12.06L67.19,109.83a19.18,19.18,0,0,1-5.3,2.33"/></svg>'},
    {id: '129', name: 'Your Name', job: 'no', private: '<img .../> tag', html: '<img src="https://sapper.svelte.dev/sapper-logo-horizontal.svg" width="78px"/>'},
    {id: '130', name: 'Jim', job: 'code', private: 'sthg@here.where', html: '<a href="https://ivolution.one">some html</a>'},
    {id: '131', name: 'John', job: 'tester', private: 'books', html: '<a href="https://ivolution.one">html</a>'},
    {id: '132', name: 'Alice', job: 'code', private: 'OSS', html: '<a href="https://ivolution.one">html</a>'},
    {id: '133', name: 'Nicole', job: 'design', private: 'painting', html: '<a href="https://ivolution.one">html</a>'},
    {id: '128', name: 'myRealName', job: 'hmm', private: 'personal info', html: '<a href="https://ivolution.one">html</a>'},
    {id: '129', name: 'Your Name', job: 'no', private: '122/456789', html: '<a href="https://ivolution.one">html</a>'},
    {id: '130', name: 'Jim', job: 'code', private: 'sthg@here.where', html: '<a href="https://ivolution.one">html</a>'},
    {id: '131', name: 'John', job: 'tester', private: 'books', html: '<a href="https://ivolution.one">html</a>'},
    {id: '132', name: 'Alice', job: 'code', private: 'OSS', html: '<a href="https://ivolution.one">html</a>'},
    {id: '133', name: 'Nicole', job: 'design', private: 'painting', html: '<a href="https://ivolution.one">html</a>'},
    {id: '128', name: 'myRealName', job: 'hmm', private: 'personal info', html: '<a href="https://ivolution.one">html</a>'},
    {id: '129', name: 'Your Name', job: 'no', private: '122/456789', html: '<a href="https://ivolution.one">html</a>'},
    {id: '130', name: 'Jim', job: 'code', private: 'sthg@here.where', html: '<a href="https://ivolution.one">html</a>'},
    {id: '131', name: 'John', job: 'tester', private: 'books', html: '<a href="https://ivolution.one">html</a>'},
    {id: '132', name: 'Alice', job: 'code', private: 'OSS', html: '<a href="https://ivolution.one">html</a>'},
    {id: '133', name: 'Nicole', job: 'design', private: 'painting', html: '<a href="https://ivolution.one">html</a>'},
    {id: '134', name: 'Denis', job: 'coder', private: 'sports', html: '<a href="https://ivolution.one">html</a>'},
    {id: '135', name: 'Marc', job: 'trainer', private: 'rc models', html: '<a href="https://ivolution.one">html</a>'},
    {id: '136', name: 'Timme', job: 'diverse', private: 'timme', html: '<a href="https://ivolution.one">html</a>'},
    {id: '137', name: 'Chuck', job: 'hero', private: 'Norris', html: '<a href="https://ivolution.one">html</a>'}
];

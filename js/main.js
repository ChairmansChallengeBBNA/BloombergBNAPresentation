var videoString = '//players.brightcove.net/68290866001/HJCdfoas_default/index.html?videoId='

var app = new Vue({
    el: '#app',
    data: {
        result: null,
        sections: [
            {name: 'Diversity & Inclusion', visible: true},
            {name: 'Pick a Word', visible: false},
            {name: 'Cultrural Months', visible: false}
        ],
        iframe: '',
        videos:[
            { vid: 'main', current: false, id: '2t6twcX' },
            { vid: 'Ali Sartipzadeh', current: false, id: '2I1pFCj' },
            { vid: 'Antonia Thomas', current: false, id: '2JP3mWv' },
            { vid: 'Joe Hagedorn', current: false, id: '2M3VHjD' },
            { vid: 'Keris Threatt', current: false, id: '2I1ztMC' },
            { vid: 'Kristy Devich', current: false, id: '2JPhChW' },
            { vid: 'Scottie Carter', current: false, id: '2MzFkwt' },
            { vid: 'Tawny Elgatian', current: false, id: '2JLXLA0' },
            { vid: 'Xing Gao', current: false, id: '2HXvbWN' },
            { vid: 'Kareena Macasaet', current: false, id: '2JLYAc4' },
            { vid: 'Rebecca Kern', current: false, id: '2HZkIdu' },
            { vid: 'Rachel Martin', current: false, id: '2MDxS39' },
            { vid: 'Madra Cochran', current: false, id: '2JMWSau' },
            { vid: 'Molly Huie', current: false, id: '2t63eaC' },
            { vid: 'Arielle Elliot', current: false, id: '2JMBl1R' },
            { vid: 'Jerome Ashton', current: false, id: '2JUC7Wd' },
            { vid: 'Teaganne Finn', current: false, id: '2t7Hmf3' },
            { vid: 'Jazlyn Williams', current: false, id: '2MCyJRV' }
        ],
        modal:{
            state: false,
            videoNumber: 0
        },
        currentVideo: '<div class="loading"></div>'
    },
    methods: {
        test(i){
            
            var h = document.body.clientHeight;
            
            this.$el.scrollTo({top: (i * h), behavior: 'smooth'});
            
            console.log(document.body.clientHeight);
            
        },
        showModal(x){
            
            this.modal.state = true;
            //this.currentVideo = this.videos[x].content;
            this.currentVideo = this.spliceFrame(this.videos[x].id);
            
        },
        closeModal(){
            
            this.modal.state = false;
            this.currentVideo = '<div class="loading"></div>';
            
        },
        spliceFrame(link){
            
            var tag1 = '<iframe src="https://bcove.video/',
                tag2 = '" allowfullscreen webkitallowfullscreen mozallowfullscreen style=\"position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;\"></iframe>'
            
            return tag1 + link + tag2;
            
        }
    },
    updated(){
        
        
        
    }
})
// alert('hello world');

import Vue from 'vue';

new Vue({
    
    el:'#app',

    data:{
        message: 'testo di prova', 

        contacts:[
            {
                icon: `<i class="fas fa-phone-alt"></i>`,
                text: '1-877-582-6735'
            },
            {
                icon: `<i class="fas fa-comment-alt"></i>`,
                text: 'Chat'
            },
            {
                icon: `<i class="fas fa-user"></i>`,
                text: 'Sign-in'
            },
            {
                icon: `<i class="fas fa-shopping-cart"></i>`,
                text: 'Cart'
            },
        ],

        navItem:[
            {
                title: 'produts',
                dropdown: true,
                itemDropdown:[
                    {
                        title:'digital painting',
                        dropdown:true,
                        itemDropdown:null
                    },
                    {
                        title:'lincesing & education',
                        dropdown:true,
                        itemDropdown:null
                    },
                    {
                        title:'mobile apps',
                        dropdown:true,
                        itemDropdown:null
                    },
                    {
                        title:'wacom tablets',
                        dropdown:true,
                        itemDropdown:null
                    },
                ]
            },
            {
                title: 'brushes',
                dropdown: true,
                itemDropdown:[
                    {
                        title:'painter',
                        dropdown:false,
                    },
                    {
                        title:'particle shop',
                        dropdown:false,
                    },
                    {
                        title:'painter essetials',
                        dropdown:false,
                    },
                ]
            },
            {
                title: 'wacom tablets',
                dropdown: false,
            },
            {
                title: 'special offerts',
                dropdown: false,
            },
            {
                title: 'free trial',
                dropdown: false,
            },
            {
                title: 'business',
                dropdown: false,
            },
            {
                title: 'support',
                dropdown: true,
                itemDropdown:[
                    {
                        title:'patches & updates',
                        dropdown:false,
                    },
                    {
                        title:'knowledbase',
                        dropdown:false,
                    },
                    {
                        title:'view all',
                        dropdown:false,
                    }
                ]
            },
            {
                title: 'learning',
                dropdown: true,
                itemDropdown:[
                    {
                        title:'tutorial',
                        dropdown:false,
                    },
                    {
                        title:'tips & tricks',
                        dropdown:false,
                    },
                    {
                        title:'artist interviews',
                        dropdown:false,
                    },
                    {
                        title:'webninar library',
                        dropdown:false,
                    },
                ]
            }

        ],

        cards1:[
            {
                title:'Painter essentials 8',
                descrition: 'The best affordable painting software for beginners',
                label: true
            },
            {
                title:'Particle shop',
                descrition: 'Powerful adobe photoshop brush plugin powered by Painter',
                label: false
            },
            {
                title:'Brush packs',
                descrition: 'Diverse add-on packs to embellish photo composites, grafic designer and painting',
                label: false
            }
        ],

        footer:[
            {
                title: 'Products',
                items: [
                    'Corel Painter',
                    'ParticleShop',
                    'Painter Essentials',
                    'Special Offers',
                    'Free Trials',
'                    All products'
                ]
            },

            {
                title: 'Quick Links',
                items: [
                    'Licensing',
                    'Tutorials & Tips',
                    'Webinars',
                    'The Painter Factory',
                    'Discovery Center',
                    'Beta Programs'
                ]
            },

            {
                title: 'Support',
                items: [
                    'Register your product',
                    'Patches & Updates',
                    'Knowledgebase',
                    'Uninstall instructions',
                    'Contact us'
                ]
            },

            {
                title: 'About Corel',
                items: [
                    'Company information',
                    'Newsroom',
                    'Careers',
                    'Partner Program',
                    'Legal Information',
                    'EULA'
                ]
            },
        ],

        socials:[
            {
                icon: `<i class="fab fa-instagram"></i>`,
                name: 'logo istragram',
                color: 'social-icon bg-pink'
            },

            {
                icon: `<i class="fab fa-facebook-f"></i>`,
                name: 'logo facebook',
                color: 'social-icon bg-blue'
            },

            {
                icon: `<i class="fab fa-twitter"></i>`,
                name: 'logo twitter',
                color: 'social-icon bg-light-blue'
            },

            {
                icon: `<i class="fab fa-youtube"></i>`,
                name: 'logo youtube',
                color: 'social-icon bg-red'
            },

            {
                icon: `<i class="fab fa-pinterest-p"></i>`,
                name: 'logo pinterest',
                color: 'social-icon bg-red-dark'
            },

            {
                icon: `<i class="fas fa-rss"></i>`,
                name: 'logo painter blog',
                color: 'social-icon bg-orange'
            },
            
        ]

        // Products
        //     Corel Painter
        //     ParticleShop
        //     Painter Essentials
        //     Special Offers
        //     Free Trials
        //     All products
        //Quick Links
        //     Licensing
        //     Tutorials & Tips
        //     Webinars
        //     The Painter Factory
        //     Discovery Center
        //     Beta Programs
        //Support
        //     Register your product
        //     Patches & Updates
        //     Knowledgebase
        //     Uninstall instructions
        //     Contact us
        //About Corel
        //     Company information
        //     Newsroom
        //     Careers
        //     Partner Program
        //     Legal Information
        //     EULA
    }
})
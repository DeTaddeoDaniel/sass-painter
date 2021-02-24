// alert('hello world');

import Vue from 'vue';

new Vue({
    
    el:'#app',

    data:{
        message: 'testo di prova', 

        navItem:[
            'produts', 
            'brushes', 
            'wacom tablets', 
            'special offerts', 
            'free trial', 
            'business', 
            'support', 
            'learning'
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
var wombleList = require('./templates/womble-list.hbs')
var headerTemplate = require('./templates/header.hbs')
var footerTemplate = require('./templates/footer.hbs')
var sidebarTemplate = require('./templates/sidebar.hbs')
var wombleDetailsTemplate = require('./templates/wombleDetails.hbs')

document.addEventListener('DOMContentLoaded', function () {
  var header = document.createElement('header')
  var headerData = {
    title: 'Womble Stories',
    subtitle:'Wombles are having a party'
  }
  header.innerHTML = headerTemplate (headerData)
  document.body.appendChild(header)

  var sidebar = document.createElement('aside')
  var linkData = {links: [
    {link: 'google.co.nz', websiteTitle: 'Google'},
    {link: 'facebook.com', websiteTitle: 'Facebook'},
    {link: 'twitter.com', websiteTitle: 'Twitter'}
  ]}
  sidebar.innerHTML = sidebarTemplate(linkData)
  document.body.appendChild(sidebar)

  var div = document.createElement('div')

  var data = {
    wombles: [
      { name: 'Orinocc', email: 'orinocco@wimbledoncommon.net', details: {item: "necklace", rubbish: "tin can"} },
      { name: 'Toms', email: 'tomsk@wimbledoncommon.net', details: {item: "hat", rubbish: "nappy"} },
      { name: 'Bung', email: 'bungo@wimbledoncommon.net', details: {item: "glasses", rubbish: "empty bottle"} }
    ]
  }
  div.innerHTML = wombleList(data)
  document.body.appendChild(div)

  var wombles = div.childNodes
  for (var i=0; i< div.childNodes.length; i++) {
    div.childNodes[i].addEventListener('click', function(evt) {
      var details = document.createElement('p')
      details.innerHTML = wombleDetailsTemplate(data)
      evt.target.appendChild(details)
    })
  }

  var footer = document.createElement('footer')
  var footerData = {
    author1: "Jana",
    author2: "Mandy",
    email:"wombles@gmail.com"
  }
  footer.innerHTML = footerTemplate(footerData)
  document.body.appendChild(footer)
})

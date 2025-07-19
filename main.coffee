# CoffeeScript for simple interactivity
# Highlights team member on hover
for member in document.querySelectorAll('.member')
  member.addEventListener 'mouseenter', ->
    member.style.background = '#e3f2fd'
    member.style.cursor = 'pointer'
  member.addEventListener 'mouseleave', ->
    member.style.background = '#f9f9f9'

# Alert on clicking email link
for link in document.querySelectorAll('a[href^="mailto:"]')
  link.addEventListener 'click', ->
    alert 'Opening email client to contact the team.'

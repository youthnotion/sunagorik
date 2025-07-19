// Compiled CoffeeScript
var member, _i, _len, _ref;
_ref = document.querySelectorAll('.member');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  member = _ref[_i];
  member.addEventListener('mouseenter', function() {
    this.style.background = '#e3f2fd';
    this.style.cursor = 'pointer';
  });
  member.addEventListener('mouseleave', function() {
    this.style.background = '#f9f9f9';
  });
}
var link, _j, _len1, _ref1;
_ref1 = document.querySelectorAll('a[href^="mailto:"]');
for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
  link = _ref1[_j];
  link.addEventListener('click', function() {
    alert('Opening email client to contact the team.');
  });
}

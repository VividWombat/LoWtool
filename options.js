// Saves options to chrome.storage
function save_options() {
    var showIncidents = document.getElementById('Incidents').checked;
    var showGVG = document.getElementById('GvG').checked;
    var showStats = document.getElementById('Stats').checked;
    var showGBInfo = document.getElementById('GBInfo').checked;
    var showGBRewards = document.getElementById('GBRewards').checked;
    var showGBDonors = document.getElementById('GBDonors').checked;
    var showInvested = document.getElementById('Invested').checked;
    var showDonation = document.getElementById('Donation').checked;
    // var defaultArcBonus = document.getElementById('defaultArcBonus').value;
    chrome.storage.local.set({
        showIncidents: showIncidents,
        showGVG: showGVG,
        showStats: showStats,
        showGBInfo: showGBInfo,
        showGBRewards: showGBRewards,
        showGBDonors: showGBDonors,
        showInvested: showInvested,
        showDonation: showDonation,
        // defaultArcBonus: defaultArcBonus
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 2000);
      // console.log(defaultArcBonus);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get({
        showIncidents: true,
        showGVG: true,
        showStats: true,
        showGBInfo: true,
        showGBRewards: true,
        showGBDonors: true,
        showInvested: true,
        showDonation: true,
        // defaultArcBonus: defaultArcBonus
}, function(items) {
      document.getElementById('Incidents').checked = items.showIncidents;
      document.getElementById('GvG').checked = items.showGVG;
      document.getElementById('Stats').checked = items.showStats;
      document.getElementById('GBInfo').checked = items.showGBInfo;
      document.getElementById('GBRewards').checked = items.showGBRewards;
      document.getElementById('GBDonors').checked = items.showGBDonors;
      document.getElementById('Invested').checked = items.showInvested;
      document.getElementById('Donation').checked = items.showDonation;
      // document.getElementById('defaultArcBonus').value = items.defaultArcBonus;
  });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
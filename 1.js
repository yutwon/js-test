function 1.js() {
  return {
    name: 'Yuyun Elistiana',
    age: ['23','24'],
    address: 'prum rss opi blok a no.2, palembang',
    hobbies: ['membaca','mendengarkan musik'],
    is_married: false ,
    list_school: [{
      highSchool: 'SMAN 3 Palembang',
        year_in: '2012',
        year_out:'2015'
    },{
      university: 'Politeknik Negeri Sriwijaya',
        year_in: '2015',
        year_out: '2019'
    }]
    skills: [{
      name: '3D Modeling',
      level: 'beginner',
    },{
      name: '3D Animator'
      level: 'beginner',
    }]
    interest_in_coding: false
  }
  let profile = 1.js();
  let skills = profile.skills;
  let list_school = profile.list_school;
  let {skills} = profile;
  console.log(JSON.stringify(skills));
  let list_school = pofile;
  console.log(JSON.stringify(list_school));
}

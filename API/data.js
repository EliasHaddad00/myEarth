import * as React from 'react'
//Step 1: pass these in as probs(activities.js)
//Step 2: create conditionals to determine render(detail.js)
//Step 3: create conditionals to determine which firebase call to make(detail.js)
//Step 4: create firebase functions (firebaseMethods.js) 


// Level 1.1
const data={

level_one_one_obj : 
{
	title: 'Understanding Plastic',
	header_one: 'What is plastic?', 
	info_one:'', 
	header_two: 'What is SUB?', 
	info_two:'',
	header_three: 'The problem with plastics?', 
	info_three:'',
	type: '1.1',
},
// Level 1.2
level_one_two_obj : 
{
	title: 'Your Plastic Footprint',
	header_one: 'How do you dispose?', 
	header_two: 'Where do plastics end up?', 
	header_three: 'How have you used plastic in the past month?', 
	type: '1.2',
	
},
// Level 2.1
level_two_one_obj : 
{
	title: 'Rethink, Refuse, Reduce, Reuse, Recycle',

	info: 'Please identify an appropriate plastic you use'
	+ ' and upload a picture of you using an alternative!',

	header_one: 'First alternative', 
	header_two: 'Second alternative', 
	header_three: 'Third alternative', 
	header_four: 'Fourth alternative', 
	header_five: 'Fifth alternative', 
	type: '2.1',
},
// Level 2.2
level_two_two_obj : 
{
	title: 'Movie screening: Watch',

	info:'Please watch the following video, we encourge you'
	+' to watch it with your family. Then please upload an '
	+'image of you (and your family) watching it.'
	+'https://youtu.be/DyIkKHS0ZmE',

	header_one: 'Upload image of the movie screening', 	
	type: '2.2',
},
// Level 2.3
level_two_three_obj : 
{
	title: 'Identifying Alternatives',

	info: 'Identify three alternatives your family can use.'
	+ ' Then describe the alternative and upload an image of it!',

	header_one: 'alternative desctiption', 
	header_two: 'alternative use image', 
	//	header_one and header_two will be used multiple times
	type: '2.3',
},
// level 3
level_three_obj : 
{
	title: ' Recycling Art (Trash to Treasure)',

	info: 'A treasure is something valuable.  Sometimes a treasure is hidden.  Players may not see a treasure right away, but when they find it, there is great value.'
	+ ' As natural resources become scarce, recycling is more important than ever (however, reducing waste and reusing that which we already have are the first and'
	+' second lines of defense, respectively).  Recycling saves landfill space.  It generally takes less energy to make recycled products.  Thinking creatively about waste can help save energy. '
	+' Collect some common SUP items found at home (yogurt cups, bottle caps, bottles, etc). ',
	header_one: 'SUP description', 
	type: '3',
},
// Level 4
level_four_obj : 
{
	title: 'Making a difference at home',

	info: 'Create Recycling bins using boxes, buckets or any appropriate mechanism. Label them.'
+'And/or encourage family members to place the sorted items into an appropriate recycling bin.'
+'Please upload a picture of your work and sign the pledge at the buttom',
	header_one: 'Image', 
	header_two: 'Plastic Free Pledge',
	type: '4',
},
// Level S1
level_S_one_obj : 
{
	title: 'Observation',

	info: 'In the company of an adult takes a walk through their community,'
	+'identifying and locating plastic debris. Then writes a strong message'
	+' encouraging people to Rethink, refuse, reduce, reuse and recycle',
	header_one: 'Description of walk', 
	header_two: 'Message',
	type: 'S1',
},
// Level S2
level_S_two_obj : 
{
	title: 'Sharing',

	info: 'create a poster which encourages people to rethink plastic and keep the neighbourhood clean.'
	+'And/or organizes a community/school group online (minimum 5 persons outside of your family) to share the crafted message (more points)'
	+'Player shares the poster and their message in public spaces and online platforms ',

	header_one: 'Image', 
	type: 'S2',
},
// Level G1
level_G_one_obj : 
{
	title: 'Rethinking Plastic',
	info: 'Describe one thing daily about the need to rethink plastic use and reduce footprint (in person or online) ',
	header_one: 'First rethink', 
	header_two: 'Second rethink', 
	header_three: 'Third rethink', 
	header_four: 'Fourth rethink', 
	header_five: 'Fifth rethink', 
	type: 'G1',
},
// Level G2
level_G_two_obj : {},

level_P_one_obj : 
{
	title: 'Sustaining Change ',

	info: 'Create a plastic collection scheme at school/ in community. Then'
	+'Organise the ‘reduce the use’ challenge – form yourselves in teams to compete against each other to determine who has reduced their use of plastic the most.'
	+'Present your concerns about SUP use to the school authorities and identify possible solutions.'
	+'Formulate a Junior Ambassadeur programme at school / in community.'
	+'Get SUP use drafted into school policy.',

	header_one: 'Describe the plastic collection scheme', 
	header_two: 'Describe ‘reduce the use’ challenge team', 
	header_three: 'Describe concerns about SUP use', 
	header_four: 'Describe how you will formulate a Junior Ambassadeur programme at school', 
	header_five: 'Describe how you will get SUP use drafted into school policy', 
	type: 'P1',
},
};


export {data}
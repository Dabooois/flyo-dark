import React from 'react';
import IconAccessAnyWhere from '../assets/images/icon-access-anywhere.svg';
import IconSecurity from '../assets/images/icon-security.svg';
import IconCollaboration from '../assets/images/icon-collaboration.svg';
import IconAnyFile from '../assets/images/icon-any-file.svg';
import Card from './Card';
const Services = () => {
	const data = [
		{
			title: 'Access your files, anywhere',
			paragraph:
				'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
			icon: IconAccessAnyWhere,
		},
		{
			title: 'Security you can trust',
			paragraph:
				'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
			icon: IconSecurity,
		},
		{
			title: 'Real-time collaboration',
			paragraph:
				'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
			icon: IconCollaboration,
		},
		{
			title: 'Store any type of file',
			paragraph:
				"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
			icon: IconAnyFile,
		},
	];

	return (
		<section className='container'>
			{data.map(({ title, paragraph, icon }, id) => {
                return <Card title={title} paragraph={paragraph} icon={icon} key={id} />;
			})}
		</section>
	);
};

export default Services;

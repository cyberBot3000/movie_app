import { Space } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React, { useMemo } from 'react';
import formatDate from '../lib/formatDate';
import './index.scss';

const { Title, Text } = Typography;

const MovieCard = ({ header, imageUrl, rawRealiseDate, genres, actions }) => {
	const formattedDate = useMemo(
		() => formatDate(rawRealiseDate),
		[rawRealiseDate]
	);
	return (
		<div className='movie-card'>
			<div className='movie-card__left'>
				<img src={imageUrl} alt='' />
			</div>
			<section className='movie-card__right'>
				<header className='movie-card__header'>
					<Title level={3}>{header}</Title>
				</header>
				<main className='movie-card__main'>
					<div className='movie-card__external-info'>
						<Text type='secondary'>{formattedDate}</Text>
						{genres && (
							<Space>
								{genres.map((elem) => (
									<div
										className='movie-card__genre'
										key={elem.id}
									>
										{elem.name}
									</div>
								))}
							</Space>
						)}
					</div>
				</main>
				{actions && (
					<footer className='movie-card__footer'>{actions}</footer>
				)}
			</section>
		</div>
	);
};
export default MovieCard;

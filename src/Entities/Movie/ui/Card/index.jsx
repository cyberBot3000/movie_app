import { Space, Typography } from 'antd';
import formatDate from 'Entities/Movie/lib/formatDate';
import React, { useMemo } from 'react';
import './index.scss';

const { Title, Text } = Typography;
const MovieCard = ({ header, imageUrl, rawRealiseDate, genres, actions }) => {
	const formattedDate = useMemo(() => {
		if (rawRealiseDate === '') {
			return '';
		}
		return formatDate(rawRealiseDate);
	}, [rawRealiseDate]);
	return (
		<div className='movie-card'>
			<div className='movie-card__left'>
				<div className='movie-card__image-contaner'>
					<img className='movie-card__image' src={imageUrl} alt='' />
				</div>
			</div>
			<section className='movie-card__right'>
				<header className='movie-card__header'>
					<Title level={3} className='movie-card__title'>
						{header}
					</Title>
				</header>
				<main className='movie-card__main'>
					<div className='movie-card__external-info'>
						<Text type='secondary'>{formattedDate}</Text>
						{genres && (
							<Space className='movie-card__genres'>
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

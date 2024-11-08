import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	customStyles,
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	setCurrentStyleParams,
}: {
	setCurrentStyleParams: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [styleParams, setStyleParams] =
		useState<customStyles>(defaultArticleState);

	const handleChange = (field: keyof customStyles) => (option: OptionType) => {
		setStyleParams({ ...styleParams, [field]: option });
	};

	const handleSubmit = (event?: React.FormEvent) => {
		event?.preventDefault();
		setCurrentStyleParams(styleParams);
	};

	const handleReset = () => {
		setStyleParams(defaultArticleState);
		setCurrentStyleParams(defaultArticleState);
	};

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						selected={styleParams.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleChange('fontFamilyOption')}
					/>
					<RadioGroup
						name={'font'}
						title={'Размер шрифта'}
						options={fontSizeOptions}
						selected={styleParams.fontSizeOption}
						onChange={handleChange('fontSizeOption')}
					/>
					<Select
						title={'Цвет шрифта'}
						selected={styleParams.fontColor}
						options={fontColors}
						onChange={handleChange('fontColor')}
					/>
					<Select
						title={'Цвет фона'}
						selected={styleParams.backgroundColor}
						options={backgroundColors}
						onChange={handleChange('backgroundColor')}
					/>
					<Select
						title={'Ширина контента'}
						selected={styleParams.contentWidth}
						options={contentWidthArr}
						onChange={handleChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {}}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={() => {}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};

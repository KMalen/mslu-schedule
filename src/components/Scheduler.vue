<template>
	<b-container>
		<b-row align-h="center">
			<b-col style="text-align:center">
				<h1>Scheduler</h1>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col>
				<b-form-select v-model="selectedFaculty" :options="facultyOptions">
					<template #first>
						<b-form-select-option :value="null" disabled
						>Факультет</b-form-select-option
						>
					</template>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-select v-model="selectedCourse" :options="courseOptions">
					<template #first>
						<b-form-select-option :value="null" disabled
						>Курс</b-form-select-option
						>
					</template>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-select v-model="selectedYear" :options="yearOptions">
					<template #first>
						<b-form-select-option :value="null" disabled
						>Учебный год</b-form-select-option
						>
					</template>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-select v-model="selectedGroup" :options="groupOptions">
					<template #first>
						<b-form-select-option :value="null" disabled
						>Группа</b-form-select-option
						>
					</template>
				</b-form-select>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-select v-model="selectedWeek" :options="weekOptions">
					<template #first>
						<b-form-select-option :value="null" disabled
						>Учебная неделя</b-form-select-option
						>
					</template>
				</b-form-select>
			</b-col>
		</b-row>
		<b-table striped hover></b-table>
	</b-container>
</template>

<script lang="ts">
import axios from 'axios';

export default {
	name: 'Scheduler',
	data() {
		return {
			selectedFaculty: null,
			selectedCourse: null,
			selectedYear: null,
			selectedGroup: null,
			selectedWeek: null,
			facultyOptions: [
				{ value: 1, text: 'Английского языка' },
				{ value: 10, text: 'Китайского языка и культуры' },
				{ value: 11, text: 'Магистратура' },
				{ value: 9, text: 'Магистратура(перев. ф-т (иностранное отделение))' },
				{ value: 5, text: 'Межкультурных коммуникаций' },
				{ value: 7, text: 'Переводческий' },
				{ value: 6, text: 'Переводческий (иностранное отделение)' },
				{ value: 3, text: 'Романских языков (исп.)' },
				{ value: 4, text: 'Романских языков (фр.)' },
				{ value: 8, text: 'Факультет заочного обучения' }
			],
			courseOptions: [
				{ value: 1, text: '1' },
				{ value: 2, text: '2' },
				{ value: 3, text: '3' },
				{ value: 4, text: '4' },
				{ value: 5, text: '5' }
			],
			yearOptions: [
				{ value: 2016, text: '2016/2017' },
				{ value: 2017, text: '2017/2018' },
				{ value: 2018, text: '2018/2019' },
				{ value: 2019, text: '2019/2020' },
				{ value: 2020, text: '2020/2021' },
				{ value: 2021, text: '2021/2022' }
			],
			weekOptions: []
		};
	},
	watch: {
		facultyOptions() {
			return null;
		},
		courseOptions() {
			return null;
		},
		yearOptions() {
			return null;
		}
	}
};
</script>

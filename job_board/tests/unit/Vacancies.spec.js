import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Vacancies from '@/components/Vacancies.vue';
import Vue from 'vue';

describe('Vacancies.vue', () => {

  it('displays the title', () => {
    const Constructor = Vue.extend(Vacancies);
    const VacanciesComponent = new Constructor().$mount();
    expect(VacanciesComponent.$el.textContent).to.contain('Current Vacancies');
  });
});

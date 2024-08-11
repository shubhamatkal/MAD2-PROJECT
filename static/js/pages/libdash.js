import Lib_header from './header-lib.js';
import router from '../utils/router.js';

const LibDash = {
	template: `
	<div>
    <header-lib />
    <div class="mainbody">
      <div>
        <div v-if="messages.length" class="alert alert-warning">
          <div v-for="message in messages" :key="message">{{ message }}</div>
        </div>
      </div>
      <br>
      <div>
        <div style="text-align: left; margin-left: 50px;">
          <h3>Sections</h3>
        </div>
      </div>
      <div class="text-center d-flex justify-content-center align-items-center me-md-auto">
        <form class="w-25 me-2" role="search" @submit.prevent="searchSections">
          <div class="d-flex">
            <input v-model="searchKeyword" type="search" class="form-control" placeholder="Search Sections..."
              aria-label="Search" />
            <button type="submit" class="btn btn-secondary " style="margin-left: 15px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-search" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1
                    1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5
                    0 0 1 11 0">
                </path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <br>
      <div>
        <div v-if="sections.length" class="row">
          <div v-for="(section, index) in sections" :key="section.id" class="col-md-4">
            <div class="section-box"
              :style="{'background-image': 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(' + section.image + ')', 'background-size': 'cover', 'background-position': 'center'}">
              <h4 style="text-align: center;">{{ section.name }}</h4>
              <p>Description: {{ section.description }}</p>
              <div style="text-align: center;">
                <router-link :to="{ name: 'show_books', params: { section_id: section.id } }"
                  class="btn btn-primary btn-sm">Show all Books</router-link>
                <router-link :to="{ name: 'add_book', params: { section_id: section.id } }"
                  class="btn btn-primary btn-sm">Add Book</router-link>
                <router-link :to="{ name: 'delete_section', params: { section_id: section.id } }"
                  class="btn btn-primary btn-sm">Delete Section</router-link>
              </div>
            </div>
            <div v-if="(index + 1) % 3 === 0" class="row">
              <br>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <p>No sections found, kindly create by using the below create button.</p>
        </div>
      </div>
      <div class="text-center">
        <router-link :to="{ name: 'add_section' }" class="btn btn-primary" style="margin-top: 10px;">Add Section</router-link>
      </div>
    </div>
  </div>
	`,
	components: {
		'header-lib': Lib_header,
	},
};

export default LibDash;
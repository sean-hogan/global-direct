import { createStore } from 'vuex'
import { fb, db } from '../firebase'

const store = new createStore({
    state: {
        courses: [],
        subjects: [],
        levels: [],
        startDates: [],
    },
    mutations: {
        setCourses(state, val) {
            state.courses = val;
        },
        setSubjects(state, val) {
            state.subjects = val.sort();
        },
        setLevels(state, val) {
            state.levels = val;
        },
        setStartDates(state, val) {
            state.startDates = val;
        }
    },
    actions: {
        fetchCourses({ commit }) {
            db.collection("courses").get().then(querySnapshot => {
                if (querySnapshot.empty) {
                    //this.$router.push('/')
                } else {
                    //this.loading = false;
                    var courses = [];
                    var subjects = [];
                    var levels = [];
                    querySnapshot.forEach(doc => {
                        courses.push(doc.data());
                        // while calling courses also populates subject & levels listing for filter
                        courses.forEach(course => {
                            if (levels.includes(course.courseLevel)) {
                                //

                            } else {
                                levels.push(course.courseLevel)
                            }

                            //using credit hours to fill out tuition price
                            course.coursePrice = parseInt(course.creditHours) * 350;
                            course.coursePrice = course.coursePrice.toLocaleString();


                            //populate subject listing
                            course.courseSubjects.forEach((subject) => {
                                if (subjects.includes(subject)) {
                                    //
                                } else {
                                    subjects.push(subject);

                                }
                            })
                        });
                    });

                    commit("setCourses", courses);
                    commit("setSubjects", subjects);
                    commit("setLevels", levels);
                }
            });
        },
        fetchDates({ commit }) {
            db.collection("startDates").get().then(querySnapshot => {
                if (querySnapshot.empty) {
                    //this.$router.push('/')
                } else {
                    //this.loading = false;
                    var startDates = [];
                    querySnapshot.forEach(doc => {
                        doc = new Date(doc.data().date.seconds * 1000);
                        startDates.push(doc);
                        startDates.sort((a, b) => a.getTime() - b.getTime());
                    });

                    commit("setStartDates", startDates);
                }
            });
        },

    },
    modules: {},
});
store.dispatch("fetchCourses");
store.dispatch("fetchDates");
export default store;
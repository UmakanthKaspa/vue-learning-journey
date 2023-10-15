<template>
    <form @submit="hadleSubmit" id="myForm">
        <label>Email:</label>
        <input type="email" required v-model="email" />
        <label>Password:</label>
        <input type="password" required v-model="password" />
        <div v-if="passwordErroe">
{{ passwordErroe }}
        </div>
        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
        </select>
        <label>Skills:</label>
        <input type="text" v-model="tempskill" @keypress="addSkill">
        <div class="instructions">
            <p>Enter a skill and press "Enter" to add it:</p>
          </div>
        <div v-for="skill in skills" :key="skill" class="skill">
           <span @click="removeSkill(skill)" class="skills-grid">{{ skill }}</span> 
        </div>
        <div class="terms">
            <input v-model="terms" type="checkbox" required>
            <label>Accept terms and conditions</label>
            <div class="submit">
                <button>Create an Account</button>
            </div>
        </div>

        <!-- <div>
        <input type="checkbox" value="umakanth" v-model="names">
        <label>Umakanth</label>
    </div>
    <div>
        <input type="checkbox" value="vamshi"   v-model="names">
        <label>Vamshi</label>
    </div>
    <div>
        <input type="checkbox" value="kumar" v-model="names">
        <label>Kumar</label>
    </div>
    <div>
        <input type="checkbox" value="vimala" v-model="names">
        <label>Vimala</label>
    </div> -->
    </form>
    <!-- <P>Email:{{ email }}</P>
    <P>Password:{{ password }}</P>
    <P>Role:{{ role }}</P>
    <P>Terms:{{ terms }}</P>
    <P>names:{{ names }}</P> -->
</template>

<script>

export default {
    data() {
        return {
            email: "d@gmail.com",
            password: "",
            role: "designer",
            terms: "false",
            tempskill: "",
            skills: [],
            passwordErroe: "",
            // names:["vamshi"]
        }
    },
    methods: {
        addSkill(e) {
            if (e.key == "Enter" && this.tempskill != "") {
                if (!this.skills.includes(this.tempskill)){
                    this.skills.push(this.tempskill);

                }
                this.tempskill = '';
            }
        },
        removeSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return  skill !== item
            })
        },
        hadleSubmit(e){
            e.preventDefault()
            this.passwordErroe = this.password.length >5 ? "":"Password must be at least 6 chars long"
            if (this.passwordError === "") {
        console.log("Form submitted successfully!");
        document.getElementById("myForm").reset();
      }
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    text-align: left;
    padding: 41px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bolder;

}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 18px;
    margin: 0 10 0 0;
    position: relative;
    top: 4;

}
.instructions {
    margin: 10px 0;
    font-size: 14px;
    color: #555;
  }
  
  .instructions p {
    font-weight: bold;
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }
  .skill {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
  }
  button{
    background: red;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: #fff;
    border-radius: 20px;

  }
  .submit{
    text-align: center;
  }
</style>
<template>
    <div>
        <v-container grid-list-xl>
            <v-layout wrap justify-space-between>
                <v-flex xs12 md6>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                                v-model="onlineControlInformation.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="onlineControlInformation.summonerName"
                                :rules="summonerNameRules"
                                label="Summoner name"
                                required
                        ></v-text-field>
                        <v-select
                                v-model="onlineControlInformation.timeInterval"
                                :items="items"
                                :rules="[v => !!v || 'Time interval is required']"
                                label="Time interval"
                                required
                        ></v-select>

                        <v-btn :disabled="!valid"
                                color="success"
                                @click="validate">
                            Submit
                        </v-btn>

                        <v-btn color="error"
                                @click="reset">
                            Reset Form
                        </v-btn>

                        <v-btn color="warning"
                                @click="resetValidation">
                            Reset Validation
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { submitOnlineControl } from '../utils/api';

export default {
    name:"OnlineControl",
    data: function () {
      return {
        valid: true,
        onlineControlInformation: {
          email: '',
          summonerName: '',
          timeInterval: ''
        },
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        summonerNameRules: [
          v => !!v || 'Summoner name is required',
        ],
        items: ['10min', '30min', '1h'],
      }
    },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        submitOnlineControl(this.onlineControlInformation)
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style>

</style>


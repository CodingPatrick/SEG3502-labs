package lab2CodingPatrick.lab2CodingPatrick

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest
class WebControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun request_to_home() {
        mockMvc.perform(MockMvcRequestBuilders.get("/"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }
/*
    @Test 
    fun add_5_to_15() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("premier", "15")
            .param("deuxieme", "5")
            .param("operation", "addition"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("resultat", "15.0"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test 
    fun remove_5_to_15() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("premier", "15")
            .param("deuxieme", "5")
            .param("operation", "soustraction"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("resultat", "10.0"))
            .andExpect(MockMvcResultMatchers.view().name("home"))

    }

    @Test 
    fun multiply_5_with_15() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("premier", "15")
            .param("deuxieme", "5")
            .param("operation", "multiplication"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("resultat", "75.0"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test 
    fun divide_5_from_15() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("premier", "15")
            .param("deuxieme", "5")
            .param("operation", "division"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("resultat", "3.0"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test 
    fun clear_all() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
            .param("premier", "15")
            .param("deuxieme", "5")
            .param("operation", "clear"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("premierVal", 0))
            .andExpect(MockMvcResultMatchers.model().attribute("deuxiemeVal", 0))
            .andExpect(MockMvcResultMatchers.model().attribute("resultatVal", 0))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }
*/

}
package lab2CodingPatrick.lab2CodingPatrick

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ModelAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller
class WebController {
    @ModelAttribute
    fun addAttributes(model: Model) {
        model.addAttribute("error", "")
        model.addAttribute("premier", "")
        model.addAttribute("deuxieme", "")
        model.addAttribute("resultat", "")
    }

    @RequestMapping("/")
    fun home(): String {
        return "home"
    }

    @GetMapping(value = ["/convert"])
    fun doConvert(
        @RequestParam(value = "premier", required = false) premier: String,
        @RequestParam(value = "deuxieme", required = false) deuxieme: String,
        @RequestParam(value = "resultat", required = false) resultat: String,
        @RequestParam(value = "operation", required = false) operation: String,
        model: Model
    ): String {
        var premierVal: Double
        var deuxiemeVal: Double
        var resultatVal: Double
        when (operation) {
            "addition" ->
                try {
                    premierVal = premier.toDouble()
                    deuxiemeVal = deuxieme.toDouble()
                    resultatVal = premierVal + deuxiemeVal
                    model.addAttribute("premier", premierVal)
                    model.addAttribute("deuxieme", deuxiemeVal)
                    model.addAttribute("resultat", resultatVal)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationFormatError")
                    model.addAttribute("premier", premier)
                    model.addAttribute("deuxieme", deuxieme)
                    model.addAttribute("resultat", resultat)
                }
            "soustraction" ->
                try {
                    premierVal = premier.toDouble()
                    deuxiemeVal = deuxieme.toDouble()
                    resultatVal = premierVal - deuxiemeVal
                    model.addAttribute("premier", premierVal)
                    model.addAttribute("deuxieme", deuxiemeVal)
                    model.addAttribute("resultat", resultatVal)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationFormatError")
                    model.addAttribute("premier", premier)
                    model.addAttribute("deuxieme", deuxieme)
                    model.addAttribute("resultat", resultat)
                }
            "multiplication" ->
                try {
                    premierVal = premier.toDouble()
                    deuxiemeVal = deuxieme.toDouble()
                    resultatVal = premierVal * deuxiemeVal
                    model.addAttribute("premier", premierVal)
                    model.addAttribute("deuxieme", deuxiemeVal)
                    model.addAttribute("resultat", resultatVal)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationFormatError")
                    model.addAttribute("premier", premier)
                    model.addAttribute("deuxieme", deuxieme)
                    model.addAttribute("resultat", resultat)
                }
            "division" ->
                try {
                    premierVal = premier.toDouble()
                    deuxiemeVal = deuxieme.toDouble()
                    resultatVal = premierVal / deuxiemeVal
                    model.addAttribute("premier", premierVal)
                    model.addAttribute("deuxieme", deuxiemeVal)
                    model.addAttribute("resultat", resultatVal)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationFormatError")
                    model.addAttribute("premier", premier)
                    model.addAttribute("deuxieme", deuxieme)
                    model.addAttribute("resultat", resultat)
                }
            "clear" ->
                try {
                    model.addAttribute("premier", 0)
                    model.addAttribute("deuxieme", 0)
                    model.addAttribute("resultat", 0)
                } catch (exp: NumberFormatException) {
                    model.addAttribute("error", "OperationFormatError")
                    model.addAttribute("premier", premier)
                    model.addAttribute("deuxieme", deuxieme)
                    model.addAttribute("resultat", resultat)
                }
            else -> {
                model.addAttribute("error", "OperationFormatError")
                model.addAttribute("premier", premier)
                model.addAttribute("deuxieme", deuxieme)
                model.addAttribute("resultat", resultat)
            }
        }
        return "home"
    }
}
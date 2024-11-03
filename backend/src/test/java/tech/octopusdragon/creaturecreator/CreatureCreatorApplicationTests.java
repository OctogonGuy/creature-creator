package tech.octopusdragon.creaturecreator;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import net.minidev.json.JSONArray;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import tech.octopusdragon.creaturecreator.enums.Color;
import tech.octopusdragon.creaturecreator.enums.Shape;
import tech.octopusdragon.creaturecreator.model.Creature;

import java.net.URI;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CreatureCreatorApplicationTests {

	@Autowired
	TestRestTemplate restTemplate;

	@Test
	void retrieveSingleTest() {
		ResponseEntity<String> response = restTemplate.getForEntity("/creature-creator/creature/101", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		Number id = documentContext.read("$.id");
		assertThat(id).isEqualTo(101);
		String name = documentContext.read("$.name");
		assertThat(name).isEqualTo("John");
		Shape bodyShape = Shape.valueOf(documentContext.read("$.bodyShape"));
		assertThat(bodyShape).isEqualTo(Shape.SQUARE);
		Color bodyColor = Color.valueOf(documentContext.read("$.bodyColor"));
		assertThat(bodyColor).isEqualTo(Color.BLUE);
	}

	@Test
	void retrieveMultipleTest() {
		ResponseEntity<String> response = restTemplate.getForEntity("/creature-creator/creature", String.class);

		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(response.getBody());
		int creatureCount = documentContext.read("$.length()");
		assertThat(creatureCount).isEqualTo(3);

		JSONArray ids = documentContext.read("$..id");
		assertThat(ids).containsExactlyInAnyOrder(101, 102, 103);
		JSONArray names = documentContext.read("$..name");
		assertThat(names).containsExactlyInAnyOrder("John", "Mary", "Tom");
		JSONArray bodyShapes = documentContext.read("$..bodyShape");
		assertThat(bodyShapes).containsExactlyInAnyOrder("SQUARE", "CIRCLE", "CIRCLE");
		JSONArray bodyColors = documentContext.read("$..bodyColor");
		assertThat(bodyColors).containsExactlyInAnyOrder("BLUE", "RED", "GREEN");
	}

	@Test
	@DirtiesContext
	void createTest() {
		Creature newCreature = new Creature(null, "Sarah", Shape.SQUARE, Color.GREEN);
		ResponseEntity<Void> createResponse = restTemplate.postForEntity("/creature-creator/creature", newCreature, Void.class);
		assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);

		URI locationOfNewCreature = createResponse.getHeaders().getLocation();
		ResponseEntity<String> getResponse = restTemplate.getForEntity(locationOfNewCreature, String.class);
		assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

		DocumentContext documentContext = JsonPath.parse(getResponse.getBody());
		Number id = documentContext.read("$.id");
		assertThat(id).isNotNull();
		String name = documentContext.read("$.name");
		assertThat(name).isEqualTo("Sarah");
		Shape bodyShape = Shape.valueOf(documentContext.read("$.bodyShape"));
		assertThat(bodyShape).isEqualTo(Shape.SQUARE);
		Color bodyColor = Color.valueOf(documentContext.read("$.bodyColor"));
		assertThat(bodyColor).isEqualTo(Color.GREEN);
	}

	@Test
	@DirtiesContext
	void updateTest() {
		Creature creatureUpdate = new Creature(null, "Bobby", Shape.CIRCLE, Color.BLUE);
		HttpEntity<Creature> request = new HttpEntity<>(creatureUpdate);
		ResponseEntity<Void> UpdateResponse = restTemplate.exchange("/creature-creator/creature/101", HttpMethod.PUT, request, Void.class);
		assertThat(UpdateResponse.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);

		ResponseEntity<String> getResponse = restTemplate.getForEntity("/creature-creator/creature/101", String.class);
		assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
		DocumentContext documentContext = JsonPath.parse(getResponse.getBody());
		Number id = documentContext.read("$.id");
		assertThat(id).isEqualTo(101);
		String name = documentContext.read("$.name");
		assertThat(name).isEqualTo("Bobby");
		Shape bodyShape = Shape.valueOf(documentContext.read("$.bodyShape"));
		assertThat(bodyShape).isEqualTo(Shape.CIRCLE);
		Color bodyColor = Color.valueOf(documentContext.read("$.bodyColor"));
		assertThat(bodyColor).isEqualTo(Color.BLUE);
	}

	@Test
	@DirtiesContext
	void deleteTest() {
		ResponseEntity<Void> deleteResponse = restTemplate.exchange("/creature-creator/creature/101", HttpMethod.DELETE, null, Void.class);
		assertThat(deleteResponse.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);

		ResponseEntity<String> getResponse = restTemplate.getForEntity("/creature-creator/creature/101", String.class);
		assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
	}

}
